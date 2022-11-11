import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
//import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass] = useState('text-animate')

  /*const nameArray = [' ','Q', 'h', 'a', 'm', 'a', ' ', 'Y', 'e','d','w','a']
  const jobArray = [
    'B',
    'S',
    'c',
    ' ',
    
    'G',
    'r',
    'a',
    'd',
    'u',
    'a',
    't',
    'e',
  ]*/

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass} _14`}> </span>
            <span className={`${letterClass} _14`}>Qhama Yedwa</span>
            <br />
            <span className={`${letterClass} _14`}>BSc Graduate</span>
          </h1>
          <h2>Bsc Computer Science Graduate | Honours Student</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home