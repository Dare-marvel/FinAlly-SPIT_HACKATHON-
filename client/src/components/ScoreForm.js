import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import axios from 'axios';

function ScoreForm() {
    // State variables to store form data and score category
    const [salary, setSalary] = useState('');
    const [age, setAge] = useState('');
    const [expenditure, setExpenditure] = useState('');
    const [savings, setSavings] = useState('');
    const [scoreCategory, setScoreCategory] = useState('');
    const [overallScore, setOverallScore] = useState(0);

    // Function to handle form input changes for each field
    const handleSalaryChange = (event) => {
        setSalary(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleExpenditureChange = (event) => {
        setExpenditure(event.target.value);
    };

    const handleSavingsChange = (event) => {
        setSavings(event.target.value);
    };


    // Perform scoring calculation


    // Calculate overall score based on weighted factors



    // // Function to handle form input changes
    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     // Check if the value is numeric before updating the state
    //     if (!isNaN(value)) {
    //         setFormData({
    //             ...formData,
    //             [name]: value
    //         });
    //     }
    // };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         console.log('Form data:', formData);
    //         // Make a POST request to your backend server with form data
    //         const response = await axios.post('/scoreForm', formData);
    //         console.log('Response from server:', response.data);

    //         // Update the score category state with the received data
    //         setScoreCategory(response.data.scoreCategory);
    //         setOverallScore(response.data.overallScore);

    //     } catch (error) {
    //         console.error('Error sending form data:', error);
    //         // Optionally, you can handle errors here, such as showing an error message to the user
    //     }
    // };
    function calculateAgeScore(age) {
        // We'll assume younger age is better for saving, so we'll assign higher scores to younger ages
        // Adjust the scoring logic based on your specific criteria
        if (age < 30) {
            return 90;
        } else if (age < 40) {
            return 80;
        } else if (age < 50) {
            return 70;
        } else if (age < 60) {
            return 60;
        } else {
            return 50;
        }
    }

    function calculateExpenditureScore(expenditurePercentage) {
        // We'll assume lower expenditure percentage is better, so we'll assign higher scores to lower percentages
        // Adjust the scoring logic based on your specific criteria
        if (expenditurePercentage <= 30) {
            return 90;
        } else if (expenditurePercentage <= 40) {
            return 80;
        } else if (expenditurePercentage <= 50) {
            return 70;
        } else {
            return 60;
        }
    }

    function calculateSavingsScore(savingsPercentage) {
        // We'll assume higher savings percentage is better, so we'll assign higher scores to higher percentages
        // Adjust the scoring logic based on your specific criteria
        if (savingsPercentage >= 30) {
            return 90;
        } else if (savingsPercentage >= 20) {
            return 80;
        } else if (savingsPercentage >= 10) {
            return 70;
        } else {
            return 60;
        }
    }

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         // Make a POST request to your backend server with form data
    //         const response = await axios.post('/scoreForm', { salary, age, expenditure, savings });
    //         console.log('Response from server:', response.data);

    //         // Handle the response here if needed

    //     } catch (error) {
    //         console.error('Error sending form data:', error);
    //         // Optionally, you can handle errors here, such as showing an error message to the user
    //     }
    // };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Calculate scores and overall score
        const savingsPercentage = (savings / salary) * 100;
        const expenditurePercentage = (expenditure / salary) * 100;
        const ageScore = calculateAgeScore(age);
        const savingsScore = calculateSavingsScore(savingsPercentage);
        const expenditureScore = calculateExpenditureScore(expenditurePercentage);
        let temp = (ageScore * 0.3) + (savingsScore * 0.4) + (expenditureScore * 0.3);
        setOverallScore(temp);

        if (overallScore >= 80) {
            setScoreCategory('Excellent');
        } else if (overallScore >= 60) {
            setScoreCategory('Good');
        } else if (overallScore >= 40) {
            setScoreCategory('Fair');
        } else {
            setScoreCategory('Poor');
        }
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div style={{ borderRadius: 8, backgroundColor: '#f0f0f0', padding: 20, maxWidth: 400 }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Salary"
                                    value={salary}
                                    onChange={handleSalaryChange}
                                    variant="outlined"
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Age"
                                    value={age}
                                    onChange={handleAgeChange}
                                    variant="outlined"
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Expenditure"
                                    value={expenditure}
                                    onChange={handleExpenditureChange}
                                    variant="outlined"
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Savings"
                                    value={savings}
                                    onChange={handleSavingsChange}
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

            {/* Display the score category */}
            <div>
                <h2>Score Category: {scoreCategory}</h2>
                <h2>Overall Score: {overallScore}</h2>

            </div>
        </>
    );
}

export default ScoreForm;
