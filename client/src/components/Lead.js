import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        // Generate random leaderboard data
        const randomData = Array.from({ length: 10 }, (_, index) => ({
            name: `Player ${index + 1}`,
            streak: Math.floor(Math.random() * 20) // Random streak value
        }));

        // Sort the data based on streak in descending order
        randomData.sort((a, b) => b.streak - a.streak);

        setLeaderboardData(randomData);
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '30%' }}>
                <div style={{  overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
                    <h2 style={{ textAlign: 'center' }}>Leaderboard</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '10%', padding: '10px', textAlign: 'center', backgroundColor: '#f2f2f2'}}>Rank</th>
                                <th style={{ width: '40%', padding: '10px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Player</th>
                                <th style={{ width: '40%', padding: '10px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Streak</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboardData.map((player, index) => (
                                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white' }}>
                                    <td style={{ padding: '10px', textAlign: 'center' }}>{index + 1}</td>
                                    <td style={{ padding: '10px', textAlign: 'left' }}>{player.name}</td>
                                    <td style={{ padding: '10px', textAlign: 'left' }}>
                                        {player.streak}
                                        <span role="img" aria-label="Lightning" style={{ marginLeft: '5px' }}>
                                            ⚡
                                        </span>
                                    </td>
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
