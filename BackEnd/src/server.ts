/**
 * # `server.ts`
 *
 * The entrypoint to the express app.
 *
 * This file is responsible for defining the endpoints of your server.
 */
import express, { json, Response, Request } from 'express';
import morgan from 'morgan';
import config from './config.json';
import cors from 'cors';
import process from 'process';
import { echo, clear, error } from './debug';
import { handleError } from './errors';

import { addCar } from './functions/addCar';
import { addBrands } from './functions/addBrands';
import { addStats } from './functions/addStat';
import { showAllBrands, showCars, showCarsStats } from './functions/showCar';
import fs from 'fs';
import { getData } from './dataStore';
import { deleteBrand } from './functions/deleteBrands';
import { deleteCars } from './functions/deleteCar';


const app = express();
app.use(json());
app.use(cors());
app.use(morgan('dev'));

const PORT: number = parseInt(process.env.PORT || config.port);
const IP: string = process.env.IP || config.ip;

/**
 * Adds the error handler to the given route.
 *
 * This attempts to call `callback`. If any error is thrown, it is passed to `handleError` to send
 * the correct response code.
 */
function withErrorHandler<T>(res: Response, callback: () => T): T | undefined {
  try {
    return callback();
  } catch (err) {
    handleError(res, err);
  }
}

// Debug routes
// ==================================================
// Note that in the real world, you should disable these when your app is running in production.

/** GET /debug/echo?value=ping */
app.get('/debug/echo', (req, res) => {
  withErrorHandler(res, () => {
    res.json(echo(req.query.value as string));
  });
});

/** GET /debug/error?code=401 */
app.get('/debug/error', (req, res) => {
  withErrorHandler(res, () => {
    res.json(error(parseInt(req.query.code as string)));
  });
});

/** DELETE /debug/clear */
app.delete('/debug/clear', (req, res) => {
  withErrorHandler(res, () => {
    clear();
    res.json({});
  });
});

// TODO: Add your routes here
// ==================================================

// Gets the dataStore from getData()
const dataStore = getData();

if (fs.existsSync('database.json')) {
  // Reads the data and returns a parsed data
  const data = String(fs.readFileSync('database.json'));
  const parsedData = JSON.parse(data);

  // Replaces each of the dataStore data with the parsed data
  dataStore.brands = parsedData.brands;
}

// When saving, write the new state of the dataStore
const save = () => {
  fs.writeFileSync('database.json', JSON.stringify(dataStore));
};

app.post('/add/brands', (req: Request, res: Response) => {
  const { name, logo} = req.body;

  try {
    res.json(addBrands(name, logo));
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  save();
});

app.post('/add/cars', (req: Request, res: Response) => {
  const { make, model, year, image} = req.body;

  try {
    res.json(addCar(make, model, year, image));
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  save();
});

app.post('/add/cars/stats', (req: Request, res: Response) => {
  const { model, type, seats, fuelType, horsePower, torque, topSpeed, trackTime, engineType, fuelCapacity, tyrePressure} = req.body;

  try {
    res.json(addStats(model, type, seats, fuelType, horsePower, torque, topSpeed, trackTime, engineType, fuelCapacity, tyrePressure));
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  save();
});

app.get('/show/brands', (req: Request, res: Response) => {

  try {
    res.json(showAllBrands());
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  save();
});

app.get('/show/cars/:company', (req: Request, res: Response) => {
  const company = req.params.company as string;

  try {
    res.json(showCars(company));
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  save();
});

app.get('/show/carStats/:model', (req: Request, res: Response) => {
  const model = req.params.model as string;

  try {
    res.json(showCarsStats(model));
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  save();
});


app.delete('/brands/delete', (req: Request, res: Response) => {
  const brandName = req.query.brandName as string;

  try {
    res.json(deleteBrand(brandName));
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  save();
});

app.delete('/cars/delete', (req: Request, res: Response) => {
  const make = req.query.make as string;
  const model = req.query.model as string;

  try {
    res.json(deleteCars(make, model));
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  save();
});


//===================================================
// Start server
const server = app.listen(PORT, IP, () => {
  console.log(`🐝 Your server is up and running! http://${IP}:${PORT}/`);
});

// For coverage, handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\n🌱 Shutting down server gracefully...');
  server.close(() => {
    console.log('🍂 Goodbye!');
    process.exit();
  });
});
