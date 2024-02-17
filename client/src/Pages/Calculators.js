// MIT License

// Copyright (c) 2019 Dennis Morello

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import React from 'react'
import Lumpsum1 from '../components/Lumpsum1';
import Lumpsum2 from '../components/Lumpsum2';
import Lumpsum3 from '../components/Lumpsum3';
import Sip1 from "../components/Sip1"
import Sip2 from "../components/Sip2"
import Sip3 from "../components/Sip3"
import Footer from '../components/Footer';
import "./CalculatorStyle.css"
// import { Fade } from 'react-awesome-reveal';
// import wave from "../images/wave.webp"

const Calculators = () => {
  document.title = "Calculators";
  return ( 
    <>
      {/* <img src={wave} alt="" className="waveimg" /> */}
      <div className="calcheading" id='sipheading'>SIP CALCULATORS</div>
      <div className="calcdiv1">
        <Sip1></Sip1>
        <Sip3></Sip3>
        <Sip2></Sip2>
      </div>
      <div className="calcheading" id='lumpsumheading'>LUMPSUM CALCULATORS</div>
      <div className="calcdiv1">
        <Lumpsum1></Lumpsum1>
        <Lumpsum3></Lumpsum3>
        <Lumpsum2></Lumpsum2>
      </div>
      <br></br>
      <Footer/>


    </>
  )
}

export default Calculators
