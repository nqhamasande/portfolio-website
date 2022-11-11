import { useState } from 'react'
import {
  faAngular,
  faJava,
  faNode,
  faJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
//import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass] = useState('text-animate')
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _14`}>About me</span>
          </h1>
          <p>
            I'm a very ambitious graduate looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects. I am looking for an opportunity
            that will allow me to grow both individually and professionally while at the same time 
            I help the co meet its business needs/goals 
          </p>
          <p align="LEFT">
            I like to build positive relationships with the people I work with. I naturally curious
            and always eager to learn and develop new skills that will benefit myself as well as the 
            organization that I will be part of.
          </p>
          <p>
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJs} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJava} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPython} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNode} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About