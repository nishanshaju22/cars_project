import React from 'react'
import '../css/Navbar.css'

const About = () => {
  return (
    <>
        <div className='about'> 
            <h1>About Cars</h1>
        </div>
        <div className="services" id="services">
            <div className="services__card">
                <h2>The best way to Find details about any car</h2>
                <p>
                    We specilise in creating a space where users can add, edit and delete detials about cars.
                    the idea of the website is to provide users with a detailed outlook of a car they choose
                    allowing them to find any spesific details of the cars they choose.
                </p>
                <p>
                    The idea for this website came to me when i was finding it hard to locate speific details about
                    my car i needed. I figured it would be a great idea to have a website to has any details you would
                    want to find about a car in one place. This website allows for a great space to learn and educate
                    onceself about cars.
                </p>
            </div>
        </div>
    </>
  )
}

export default About