import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRef } from "react";
import Chart from "chart.js/auto";
// import { Dashboard } from "@mui/icons-material";


const CODB = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: null,
    });

    const PointStylingGraph = () => {
        const chartContainer = useRef(null);
        const chartInstance = useRef(null);

        useEffect(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            document.title = "Sangrah | Dashboard";
            getUserInfo();
        }, []);
        useEffect(() => {
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const randomExpenditure = Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000));

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
                            beginAtZero: true
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
        const getUserInfo = async () => {
            try {
                const c = await axios.get("/Dashboard", {
                    withCredentials: true,
                });
                const {
                    name,
                    email,
                    phone,
                    Grole,
                    bank_account,
                    walletamt,
                    sip,
                    points,
                    transactions
                } = c.data;
                setUser({ name, email, phone });
            } catch (error) {
                if (error.response) {
                    toast.error(error.response.data.error);
                } else {
                    toast.error("Some error occurred");
                }
            }
        };

        return (
            //  
            <>
                <div>
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <canvas ref={chartContainer}></canvas>
                    </div>
                </div>
                Hello udit
            </>
        );

    };
}
export default CODB;
