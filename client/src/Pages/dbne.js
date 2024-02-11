import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Lead from '../components/Lead.js';
import Score from '../components/ScoreForm.js';
import Predictor from "../components/Predictor.js"
const Dbne = () => {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const randomExpenditure = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100000));

        const ctx = chartContainer.current.getContext('2d');

        // Destroy existing chart instance if it exists
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: 'Expenditure',
                    data: randomExpenditure,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                if (value >= 1000000) {
                                    return (value / 1000000) + 'M';
                                } else if (value >= 1000) {
                                    return (value / 1000) + 'K';
                                } else {
                                    return value;
                                }
                            }
                        }
                    }
                }
            }
        });

        // Clean up function
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div>
        <div style={{
            // border: "2px solid red",
            display: "flex",
            padding: "2rem",
            justifyContent: "space-around"
        }}>
        <div style={{ width: '100%',height: "fit-content", margin: '0 auto', borderRadius: '10px', padding: '10px', display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div style={{ width: '90%',height: "100%", margin: '0 auto', borderRadius: '10px', backgroundColor: 'rgb(217, 227, 237, 0.6)', padding: '1rem' }}>
                <canvas ref={chartContainer}></canvas>
            </div>
            <div >
                <Score/>
            </div>  
        </div>


        <div style={{
            width : "50%",
            // border: "1px solid red"
        }}>
        <div >
            <Lead/>
        </div>
        <div>
            <Predictor/>
        </div> 
        </div>
        </div>
         
           
        </div>
    );
};

export default Dbne;
