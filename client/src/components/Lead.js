import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        // Function to fetch leaderboard data from the backend API
        const fetchLeaderboardData = async () => {
            try {
                const response = await axios.get('/getleaderboard'); // Assuming the API endpoint is '/users'
                setLeaderboardData(response.data); // Set the fetched data to state
            } catch (error) {
                console.error('Error fetching leaderboard data:', error);
            }
        };

        fetchLeaderboardData(); // Call the function to fetch leaderboard data
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%' }}>
                <div style={{ overflow: 'hidden', boxShadow: 'rgb(217, 227, 237)', padding: '20px' }}>
                    <h3 style={{ textAlign: 'center' }}>Leaderboard</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '10%', padding: '10px', textAlign: 'center', backgroundColor: '#f2f2f2' }}>Rank</th>
                                <th style={{ width: '40%', padding: '10px', textAlign: 'center', backgroundColor: '#f2f2f2' }}>Player</th>
                                <th style={{ width: '40%', padding: '10px', textAlign: 'center', backgroundColor: '#f2f2f2' }}>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboardData.map((player, index) => (
                                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white' }}>
                                    <td style={{ padding: '10px', textAlign: 'center' }}>{index + 1}</td>
                                    <td style={{ padding: '10px', textAlign: 'center' }}>{player.name}</td>
                                    <td style={{ padding: '10px', textAlign: 'center' }}>{player.points}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
