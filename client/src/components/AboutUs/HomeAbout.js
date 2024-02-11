// import React from 'react'
// import Navbar from './Navbar'
// import About from './About'
// import Testimonials from './Testimonials'
// import Demo from './Demo'
// import Picture from './Picture'

// function HomeAbout() {
//   return (
//     <div>
//     {/* <Picture/> */}
//       {/* <Navbar /> */}
//       <About />
//       {/* <Testimonials /> */}
//       <Demo />
//     </div>
//   );
// }

// export default HomeAbout;


// ======================================================================================

import React from 'react'
import whatis from "./images/QualityArtboard16@2x-8-2x.png"
import "./AboutStyles.css"
import whatisupper from "./images/whatisdivimg.png"
import whatisdownimg from "./images/whatisdownimg.png"
import founders from "./images/founders.png"
import homeimg1 from "./images/2.jpg"
import Footer from "../../components/Footer"
import { useEffect } from 'react'
import investing from "./images/investing_HA.svg"
import teaching from "./images/Teaching.svg"
// import Fade from 'react-awesome-reveal/Fade';
// import Zoom from 'react-awesome-reveal/Zoom';
// import Flip from 'react-awesome-reveal/Flip';
// import Slide from 'react-awesome-reveal/Slide';
// import Pulse from 'react-reveal/Pulse';
// import Bounce from 'react-reveal/Bounce';

export default function HomeAbout() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.title = 'FinAlly | About';
  }, [])
  return (
    <>
      <div>
        {/* <Fade bottom> */}
        <div className="sec1" id='aboutsec1'>
          <div className="rightsec">
            <img src={investing} alt="" id="firstimg" />
          </div>
          <div className="leftsec">
            <h2>Who is FinAlly?</h2>
            <div className="seewhy">Empowering Financial Freedom, One Step at a Time</div>
            <div className="seewhyinfo">At FinAlly, we're more than just a financial platform; we're your partner in achieving financial success and independence. Founded with a vision to simplify and revolutionize personal finance, we empower individuals of all backgrounds to take control of their financial futures. Whether you're saving for a dream vacation, planning for retirement, or investing for the long term, we're here to support you every step of the way.
              <br />With a commitment to transparency, innovation, and excellence, FinAlly is your trusted companion on the journey to financial freedom. Join us and discover a brighter financial future today.</div>
          </div>

        </div>
        {/* </Fade> */}
        <div>
          <img src={homeimg1} alt="" className='footerimg' />
        </div>
        <div className="sec1" id='aboutsec2'>

          {/* <Fade left> */}
          <div className="leftsec">
            <h2>What is FinAlly?</h2>
            {/* <div className="seewhy">We make online proctoring simple, easy, and human.</div> */}
            <div className="seewhyinfo" id='absec2left'>
              FinAlly is a cutting-edge fintech platform designed to revolutionize the way individuals manage their finances. We offer a comprehensive suite of tools and resources tailored to empower users of all backgrounds to achieve their financial goals with ease and confidence. From automated savings and investment tracking to personalized budgeting solutions, FinAlly provides the tools and guidance needed to navigate the complexities of personal finance. With a keen emphasis on simplicity, accessibility, and financial literacy, FinAlly is more than just a financial platform—it's a partner in your journey to financial freedom. Join us and discover how FinAlly can help you take control of your finances and unlock a brighter financial future.
            </div>
          </div>
          {/* </Fade> */}
          {/* <Fade right> */}
          <div className="rightsec" id='absec2right'>
            <img src={teaching} alt="" id="thirdimg" />
          </div>
          {/* </Fade> */}
        </div>
        <div>
          <img src={homeimg1} alt="" className='footerimg' style={{ transform: "rotateX(180deg)" }} />
        </div>



      </div >


      <Footer />

    </>
  )
}
