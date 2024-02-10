import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import axios from 'axios';

function FormExample() {
    // State variables to store form data
    const [formData, setFormData] = useState({
        salary: '',
        age: '',
        expenditure: '',
        savings: ''
    });

    // Function to handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // Check if the value is numeric before updating the state
        if (!isNaN(value)) {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Make a POST request to your backend server with form data
            const response = await axios.post('/scoreForm', formData);
            console.log('Form data sent successfully:', response.data);
            // You can handle the response here, such as showing a success message to the user
        } catch (error) {
            console.error('Error sending form data:', error);
            // You can handle errors here, such as showing an error message to the user
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ borderRadius: 8, backgroundColor: '#f0f0f0', padding: 20, maxWidth: 400 }}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Salary"
                                name="salary"
                                value={formData.salary}
                                onChange={handleInputChange}
                                variant="outlined"
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Age"
                                name="age"
                                value={formData.age}
                                onChange={handleInputChange}
                                variant="outlined"
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Expenditure"
                                name="expenditure"
                                value={formData.expenditure}
                                onChange={handleInputChange}
                                variant="outlined"
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Savings"
                                name="savings"
                                value={formData.savings}
                                onChange={handleInputChange}
                                variant="outlined"
                                type="number"
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default FormExample;
