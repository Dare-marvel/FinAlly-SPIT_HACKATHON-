// The MIT License (MIT)

// Copyright (c) 2014 Call-Em-All

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

// MIT License

// Copyright (c) 2020 Aaron Wong

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

import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import "./Lumpsum2Style.css"
import ReactCardFlip from "react-card-flip";
import { makeStyles } from '@mui/styles';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
const useStyles = makeStyles({
  root: {
    width: 400,
  },
  input: {
    // border: "2px solid red",
    width: 80,
  },
  input2: {
    // border: "2px solid red",
    width: 32,
  },
  input3: {
    // border: "2px solid red",
    width: 25,
  },
  primary: {
    // Purple and green play nicely together.
    color: 'black',
  },
  secondary: {
    // This is green.A700 as hex.
    color: '#11cb5f',
  },
  action: {
    color: 'violet',
  },
});
// const theme = createTheme({
//   palette: {
//     primary: {
//       // Purple and green play nicely together.
//       main: purple[500],
//     },
//     secondary: {
//       // This is green.A700 as hex.
//       main: '#11cb5f',
//     },

//   },
// });
const marks21 = [
  {
    value: 0,
    label: '0k',
  },
  {
    value: 25000000,
    label: '2.5Cr',
  },
  {
    value: 50000000,
    label: '5Cr',
  },
];
const marks22 = [
  {
    value: 0,
    label: '0 Y',
  },
  {
    value: 15,
    label: '15 Y',
  },
  {
    value: 30,
    label: '30 Y',
  },

];
const marks23 = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 10,
    label: '10%',
  },
  {
    value: 20,
    label: '20%',
  },

];
export default function Lumpsum2() {
  const classes = useStyles();
  const [flip, setFlip] = useState(false);
  // ------------------------------------------------------------
  const handleSliderChange = (event, newValue) => {
    setcurrvalue2(newValue);
  };

  const handleInputChange = (event) => {
    // setcurrvalue(event.target.value.slice(0, 7));

    setcurrvalue2(event.target.value === '' ? '' : Number(event.target.value.slice(0, 8)));
  };

  const handleBlur = () => {
    if (currvalue2 < 0) {
      setcurrvalue2(0);
    } else if (currvalue2 > 50000000) {
      setcurrvalue2(50000000);
    }
  };
  // -----------------------------------------------------------
  const handleSliderChange2 = (event, newValue) => {
    setrate2(newValue);
  };

  const handleInputChange2 = (event) => {
    setrate2(event.target.value === '' ? '' : Number(event.target.value.slice(0, 4)));
  };

  const handleBlur2 = () => {
    if (rate2 < 0) {
      setrate2(0);
    } else if (rate2 > 20) {
      setrate2(20);
    }
  };
  // ------------------------------------------------------------------
  const handleSliderChange3 = (event, newValue) => {
    settime2(newValue);
  };

  const handleInputChange3 = (event) => {
    settime2(event.target.value === '' ? '' : Number(event.target.value.slice(0, 2)));
  };

  const handleBlur3 = () => {
    if (time2 < 0) {
      settime2(0);
    } else if (time2 > 30) {
      settime2(30);
    }
  };
  // ----------------------------------------------------------------------
  const [currvalue2, setcurrvalue2] = useState();
  const [time2, settime2] = useState();
  const [rate2, setrate2] = useState();



  // function valuetext2(value) {
  //   setcurrvalue2(value*100000);
  //   return `${value}`;
  // }
  // function valuetime2(value) {
  //   settime2(value/10);
  //   return `${value}`;
  // }
  // function valuerate2(value) {
  //   setrate2(Math.floor(value/3.33));
  //   return `${value}`;
  // }


  return (
    <>
      <ReactCardFlip isFlipped={flip}
        flipDirection="vertical">

        <div className='card9'>
          <div className="title9" onClick={() => setFlip(!flip)} style={
            {
              color: "rgb(0, 175, 239)"
            }
          }>
            PRESENT VALUE CALCULATOR <ExpandMoreIcon></ExpandMoreIcon> </div>
          {/* <button </button> */}
        </div>
        <div className="card9">
          <div className="title9" onClick={() => setFlip(!flip)}>PRESENT VALUE CALCULATOR<ExpandLessIcon></ExpandLessIcon> </div>


          <div className="sec19">
            <div className="head9">
              <div className="name9">Future Value</div>
              <div className='inputWithRupee'>
                <div className='Rupee'>₹</div>
                <Input
                  className={classes.input}
                  value={currvalue2}
                  margin="dense"
                  onChange={handleInputChange}
                  onBlur={handleBlur}

                  inputProps={{
                    step: 1000,
                    min: 0,
                    max: 50000000,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                  }}
                />
              </div>
              {/* <div className="amount9"> ₹{(currvalue2*1).toLocaleString('en-IN')}</div> */}
            </div>
            <Box className="box9">
              <Slider
                aria-label="Always visible"
                value={typeof currvalue2 === 'number' ? currvalue2 : "0"}
                onChange={handleSliderChange}
                min={0}
                max={50000000}
                step={100000}
                aria-labelledby="input-slider"
                marks={marks21}
                // color="primary"
                className={classes.action}
              // valueLabelDisplay="on"
              />
            </Box>
          </div>
          <div className="sec19">
            <div className="head9">
              <div className="name9">Expected Returns (p.a)</div>
              {/* <div className="amount9">{rate2}%</div> */}
              <div className='inputWithRupee'>

                <Input
                  className={classes.input2}
                  value={rate2}
                  margin="dense"
                  onChange={handleInputChange2}
                  onBlur={handleBlur2}
                  inputProps={{
                    step: 1,
                    min: 0,
                    max: 20,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                  }}
                />
                <div className='Rupee'>%</div>
              </div>
            </div>
            <Box className="box9">
              <Slider
                aria-label="Always visible"
                value={typeof rate2 === 'number' ? rate2 : "0"}
                onChange={handleSliderChange2}
                min={0}
                max={20}
                step={1}
                aria-labelledby="input-slider"
                marks={marks23}
                // color="primary"
                className={classes.action}
              // valueLabelDisplay="on"
              />
            </Box>
          </div>

          <div className="sec19">
            <div className="head9">
              <div className="name9">Time Period</div>
              {/* <div className="amount9">{time2} Years</div> */}
              <div className='inputWithRupee'>

                <Input
                  className={classes.input3}
                  value={time2}
                  margin="dense"
                  onChange={handleInputChange3}
                  onBlur={handleBlur3}
                  inputProps={{
                    step: 1,
                    min: 0,
                    max: 30,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                  }}
                />
                <div className='Rupee'>Years</div>
              </div>
            </div>
            <Box className="box9">
              <Slider
                aria-label="Always visible"
                value={typeof time2 === 'number' ? time2 : "0"}
                onChange={handleSliderChange3}
                min={0}
                max={30}
                step={1}
                aria-labelledby="input-slider"
                marks={marks22}
                // color="primary"
                className={classes.action}
              // valueLabelDisplay="on"
              />

            </Box>
          </div>

          <div className="output9">
            <div className="out9">
              <div className="out19">Present Amount:</div>
              <div className="out29">₹{(Math.ceil(currvalue2 / (Math.pow((1 + (rate2 / 100)), time2)))).toLocaleString('en-IN')}</div>
            </div>
            <div className="out9">
              <div className="out19">Estimated Returns:</div>
              <div className="out29">₹{(currvalue2 - Math.ceil(currvalue2 / (Math.pow((1 + (rate2 / 100)), time2)))).toLocaleString('en-IN')}</div>
            </div>
            <div className="out9">
              <div className="out19">Future Value:</div>
              <div className="out29">₹{(currvalue2 * 1).toLocaleString('en-IN')}</div>
            </div>
          </div>

        </div>
      </ReactCardFlip>
    </>
  );
}