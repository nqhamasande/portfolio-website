import { useRef } from 'react'
//import gsap from 'gsap-trial'
//import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s1.jpg'
import './index.scss'

const Logo = () => {
  //const bgRef = useRef()
  //const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="img-container" >
      <img
        className="img-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="Graduate"
      />
    </div>
  )
}

export default Logo