import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Lead from '../components/Lead.js';
import Score from '../components/ScoreForm.js';

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
        <div style={{ maxWidth: '600px', margin: '0 auto', borderRadius: '10px', backgroundColor: 'rgba(200, 200, 200, 0.5)', padding: '10px' }}>
            <canvas ref={chartContainer}></canvas>
        </div>
        <div>
            <Lead/>
        </div>
        <div>
            <Score/>
        </div>    
        </div>
    );
};

export default Dbne;
