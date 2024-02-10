import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function Predictor() {
  const [formData, setFormData] = useState({
    Investment_Amount: '',
    Risk_Tolerance: 'High',
    Spending_Amount: '',
  });
  const [prediction, setPrediction] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setPrediction(data.prediction_text);
  };

  return (
    <div className="App">
      <center>
        <h1 className="h1">Predict Investment</h1>
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            type="text"
            name="Investment_Amount"
            label="Investment Amount"
            required
            value={formData.Investment_Amount}
            onChange={handleChange}
          />
          <FormControl fullWidth>
            <InputLabel>Risk Tolerance</InputLabel>
            <Select
              name="Risk_Tolerance"
              value={formData.Risk_Tolerance}
              onChange={handleChange}
              required
              inputProps={{ name: 'Risk_Tolerance' }}
            >
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>
          <TextField
            type="text"
            name="Spending_Amount"
            label="Spending Amount"
            required
            value={formData.Spending_Amount}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            className="button"
          >
            Predict Investment
          </Button>
        </form>
        {prediction && <p>Prediction Result: {prediction}</p>}
      </center>
    </div>
  );
}

export default Predictor;
