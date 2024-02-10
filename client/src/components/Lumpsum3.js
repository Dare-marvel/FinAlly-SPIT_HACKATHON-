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
import "./Lumpsum3Style.css"
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
    width: 80,
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
const marks31 = [
  {
    value: 0,
    label: '0k',
  },
  {
    value: 5000000,
    label: '50L',
  },
  {
    value: 10000000,
    label: '1Cr',
  },
];
const marks32 = [
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
const marks33 = [
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
export default function Lumpsum3() {
  const classes = useStyles();
  const [flip, setFlip] = useState(false);

  // -----------------------------------------------------------------
  const handleSliderChange = (event, newValue) => {
    setcurrvalue3(newValue);
  };

  const handleInputChange = (event) => {
    // setcurrvalue(event.target.value.slice(0, 7));

    setcurrvalue3(event.target.value === '' ? '' : Number(event.target.value.slice(0, 8)));
  };

  const handleBlur = () => {
    if (currvalue3 < 0) {
      setcurrvalue3(0);
    } else if (currvalue3 > 10000000) {
      setcurrvalue3(10000000);
    }
  };
  // -----------------------------------------------------------
  const handleSliderChange2 = (event, newValue) => {
    setrate3(newValue);
  };

  const handleInputChange2 = (event) => {
    setrate3(event.target.value === '' ? '' : Number(event.target.value.slice(0, 4)));
  };

  const handleBlur2 = () => {
    if (rate3 < 0) {
      setrate3(0);
    } else if (rate3 > 20) {
      setrate3(20);
    }
  };
  // ----------------------------------------------------------------------------------
  const handleSliderChange3 = (event, newValue) => {
    setfuturevalue3(newValue);
  };

  const handleInputChange3 = (event) => {
    setfuturevalue3(event.target.value === '' ? '' : Number(event.target.value.slice(0, 8)));
  };

  const handleBlur3 = () => {
    if (futurevalue3 < 0) {
      setfuturevalue3(0);
    } else if (futurevalue3 > 50000000) {
      setfuturevalue3(50000000);
    }
  };
  // ---------------------------------------------
  const [currvalue3, setcurrvalue3] = useState();
  const [futurevalue3, setfuturevalue3] = useState();
  const [rate3, setrate3] = useState();

  // function valuetext3(value) {
  //   setcurrvalue3(value*100000);
  //   return `${value}`;
  // }
  // function valuetext3future(value) {
  //   setfuturevalue3(value*100000);
  //   return `${value}`;
  // }
  // function valuerate3(value) {
  //   setrate3(Math.floor(value/3.33));
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
           REQUIRED NUMBER OF YEARS CALCULATOR <ExpandMoreIcon></ExpandMoreIcon> </div>
          {/* <button </button> */}
        </div>
        <div className="card9">
          <div className="title9" onClick={() => setFlip(!flip)}>REQUIRED NUMBER OF YEARS CALCULATOR <ExpandLessIcon></ExpandLessIcon> </div>

          <div className="sec19">
            <div className="head9">
              <div className="name9">Present Value</div>
              <div className='inputWithRupee'>
                <div className='Rupee'>₹</div>
                <Input
                  className={classes.input}
                  value={currvalue3}
                  margin="dense"
                  onChange={handleInputChange}
                  onBlur={handleBlur}

                  inputProps={{
                    step: 1000,
                    min: 0,
                    max: 10000000,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                  }}
                />
              </div>
              {/* <div className="amount9">₹{(currvalue3*1).toLocaleString('en-IN')}</div> */}
            </div>
            <Box className="box9">
              <Slider
                aria-label="Always visible"
                value={typeof currvalue3 === 'number' ? currvalue3 : "0"}
                onChange={handleSliderChange}
                min={0}
                max={10000000}
                step={100000}
                aria-labelledby="input-slider"
                marks={marks31}
                // color="primary"
                className={classes.action}
              // valueLabelDisplay="on"
              />
            </Box>
          </div>
          {/* ---------------------------------------------- */}
          <div className="sec19">
            <div className="head9">
              <div className="name9">Expected Returns (p.a)</div>
              {/* <div className="amount9">{rate3}%</div> */}
              <div className='inputWithRupee'>

                <Input
                  className={classes.input2}
                  value={rate3}
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
                value={typeof rate3 === 'number' ? rate3 : "0"}
                onChange={handleSliderChange2}
                min={0}
                max={20}
                step={1}
                aria-labelledby="input-slider"
                marks={marks33}
                // color="primary"
                className={classes.action}
              // valueLabelDisplay="on"
              />
            </Box>
          </div>

          {/* --------------------------------------------------------------- */}
          <div className="sec19">
            <div className="head9">
              <div className="name9">Future Value</div>
              {/* <div className="amount9">₹{(futurevalue3*1).toLocaleString('en-IN')}</div> */}
              <div className='inputWithRupee'>
                <div className='Rupee'>₹</div>
                <Input
                  className={classes.input3}
                  value={futurevalue3}
                  margin="dense"
                  onChange={handleInputChange3}
                  onBlur={handleBlur3}
                  inputProps={{
                    step: 1000,
                    min: 0,
                    max: 50000000,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                  }}
                />

              </div>
            </div>
            <Box className="box9">
              <Slider
                aria-label="Always visible"
                value={typeof futurevalue3 === 'number' ? futurevalue3 : "0"}
                onChange={handleSliderChange3}
                min={0}
                max={50000000}
                step={100000}
                aria-labelledby="input-slider"
                marks={marks32}
                // color="primary"
                className={classes.action}
              // valueLabelDisplay="on"
              />

            </Box>
          </div>

          <div className="output9">
            <div className="out9">
              <div className="out19">Time Period:</div>
              <div className="out29">{((Math.log(futurevalue3) - Math.log(currvalue3)) / (Math.log(1 + (rate3 / 100)))).toFixed(2).toLocaleString('en-IN')} Years</div>
            </div>
            {/* <div className="out9">
      <div className="out19">Estimated Returns:</div>
        <div className="out29">₹{currvalue*time*12}</div>
      </div>
      <div className="out9">
      <div className="out19">Total Value:</div>
        <div className="out29">₹{currvalue * ((((1+0.01)*(time*12)) -1)/0.01)* (1+0.01)}</div>
      </div> */}
          </div>

        </div>
      </ReactCardFlip>
    </>
  );
}