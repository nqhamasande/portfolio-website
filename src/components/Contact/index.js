import { useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
//import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass] = useState('text-animate')
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_nsu4vco', 'template_7m3ss1i', form.current, '2ONoZCk-YcRSkI4fg')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
              <span className={`${letterClass} _14`}>Contact me</span>
          </h1>
          <p>
            I am interested in graduate programme opportunities or junior positions in software
            development/engineer. Throughout the course of my studies I have obtained skills and
            qualities that make me a someone who is fit and ready to grow and utilize my skills 
            professionally. However, if you have any other requests or questions, don't hesitate
            to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Qhama Yedwa,
          <br />
          South Africa,
          <br />
          Robert Sobukwe Road, <br />
          Cape Town, 7535 <br />
          <br />
          <span>067 714 6167</span> <br />
          <span>ymasande@gmail.com</span>
          
        </div>
        <div className="map-wrap">
          <MapContainer center={[-33.8943, 18.6294]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-33.9335, 18.6280]}>
              <Popup>This is where I currently reside</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact