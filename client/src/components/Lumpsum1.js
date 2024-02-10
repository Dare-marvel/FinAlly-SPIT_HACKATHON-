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
import "./Lumpsum1Style.css"
import ReactCardFlip from "react-card-flip";
import { makeStyles } from '@mui/styles';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import { createTheme } from '@material-ui/material/styles';
// import { ThemeProvider } from '@material-ui/styles';
// const muiTheme = createTheme({
//   overrides:{
//     MuiSlider: {
//       thumb:{
//       color: "rgb(32, 113, 44)",
//       },
//       track: {
//         color: 'rgb(32, 113, 44)'
//       },
//       rail: {
//         color: 'rgb(32, 113, 44)'
//       }
//     }
// }
// });
const useStyles = makeStyles({
  root: {
    width: 400,
  },
  input: {
    // border: "2px solid red",
    // color: red,
    width: 80,
    animation: "none",
  },
  input2: {
    // border: "2px solid red",
    width: 32,
    animation: "none",
  },
  input3: {
    // border: "2px solid red",
    width: 25,
    animation: "none",
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
const marks11 = [
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
const marks12 = [
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
const marks13 = [
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

export default function Lumpsum1() {
  const classes = useStyles();
  const [flip, setFlip] = useState(false);

  // ---------------------------------------------------------------------
  const handleSliderChange = (event, newValue) => {
    setcurrvalue(newValue);
  };

  const handleInputChange = (event) => {
    // setcurrvalue(event.target.value.slice(0, 7));

    setcurrvalue(event.target.value === '' ? '' : Number(event.target.value.slice(0, 8)));
  };

  const handleBlur = () => {
    if (currvalue < 0) {
      setcurrvalue(0);
    } else if (currvalue > 10000000) {
      setcurrvalue(10000000);
    }
  };
  // -----------------------------------------------------------
  const handleSliderChange2 = (event, newValue) => {
    setrate(newValue);
  };

  const handleInputChange2 = (event) => {
    setrate(event.target.value === '' ? '' : Number(event.target.value.slice(0, 4)));
  };

  const handleBlur2 = () => {
    if (rate < 0) {
      setrate(0);
    } else if (rate > 20) {
      setrate(20);
    }
  };
  // ----------------------------------------------------------------------------------
  const handleSliderChange3 = (event, newValue) => {
    settime(newValue);
  };

  const handleInputChange3 = (event) => {
    settime(event.target.value === '' ? '' : Number(event.target.value.slice(0, 2)));
  };

  const handleBlur3 = () => {
    if (time < 0) {
      settime(0);
    } else if (time > 30) {
      settime(30);
    }
  };
  // ----------------------------------------------------------------------------------


  const [currvalue, setcurrvalue] = useState();
  const [time, settime] = useState();
  const [rate, setrate] = useState();

  // function valuetext(value) {
  //   setcurrvalue(value*100000);
  //   return `${value}`;
  // }
  // function valuetime(value) {
  //   settime(value/10);
  //   return `${value}`;
  // }
  // function valuerate(value) {
  //   setrate(Math.floor(value/3.33));
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
          }>FUTURE VALUE CALCULATOR <ExpandMoreIcon></ExpandMoreIcon> </div>
        </div>
        <div className="card9">
          <div className="title9" onClick={() => setFlip(!flip)}>FUTURE VALUE CALCULATOR <ExpandLessIcon></ExpandLessIcon> </div>

          <div className="sec19">
            <div className="head9">
              <div className="name9">Total Investment</div>
              <div className='inputWithRupee'>
                <div className='Rupee'>₹</div>
                <Input
                  className={classes.input}
                  value={currvalue}
                  margin="dense"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  // color="secondary"
                  // className={classes.action}
                  inputProps={{
                    step: 1000,
                    min: 0,
                    max: 10000000,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                  }}
                />
              </div>
              {/* <div className="amount9"> ₹{(currvalue*1).toLocaleString('en-IN')}</div> */}
            </div>
            <Box className="box9">
              {/* <ThemeProvider theme={muiTheme}> */}
              <Slider
                aria-label="Always visible"
                value={typeof currvalue === 'number' ? currvalue : "0"}
                onChange={handleSliderChange}
                min={0}
                max={10000000}
                step={100000}
                aria-labelledby="input-slider"
                marks={marks11}
                // color="primary"
                className={classes.primary}
              // valueLabelDisplay="on"
              />
              {/* </ThemeProvider> */}
            </Box>
          </div>

          {/* --------------------------------------------------------- */}
          <div className="sec19">
            <div className="head9">
              <div className="name9">Expected Returns (p.a)</div>
              {/* <div className="amount9">{rate}%</div> */}
              <div className='inputWithRupee'>

                <Input
                  className={classes.input2}
                  value={rate}
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
                value={typeof rate === 'number' ? rate : "0"}
                onChange={handleSliderChange2}
                min={0}
                max={20}
                step={1}
                aria-labelledby="input-slider"
                marks={marks13}
                // color="primary"
                className={classes.secondary}
              // valueLabelDisplay="on"
              />
            </Box>
          </div>

          {/* ---------------------------------------------------------- */}
          <div className="sec19">
            <div className="head9">
              <div className="name9">Time Period</div>

              {/* <div className="amount9">{time} Years</div> */}
              <div className='inputWithRupee'>

                <Input
                  className={classes.input3}
                  value={time}
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
                value={typeof time === 'number' ? time : "0"}
                onChange={handleSliderChange3}
                min={0}
                max={30}
                step={1}
                aria-labelledby="input-slider"
                marks={marks12}
                className={classes.action}
              // valueLabelDisplay="on"
              />

            </Box>
          </div>

          <div className="output9">
            <div className="out9">
              <div className="out19">Invested Amount:</div>
              <div className="out29">₹{(currvalue * 1).toLocaleString('en-IN')}</div>
            </div>
            <div className="out9">
              <div className="out19">Estimated Returns:</div>
              <div className="out29">₹{(Math.ceil(currvalue * (Math.pow((1 + (rate / 100)), time))) - currvalue).toLocaleString('en-IN')}</div>
            </div>
            <div className="out9">
              <div className="out19">Future Value:</div>
              <div className="out29">₹{(Math.ceil(currvalue * (Math.pow((1 + (rate / 100)), time)))).toLocaleString('en-IN')}</div>
            </div>
          </div>

        </div>
      </ReactCardFlip>
    </>
  );
}