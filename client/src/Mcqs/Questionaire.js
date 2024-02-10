import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuestionnairePage = () => {
    const [testsData, setTestsData] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState('');

    useEffect(() => {
        // Fetch data from your API endpoint
        const fetchData = async () => {
            try {
                const response = await axios.get('/fetchMCQs');
                setTestsData(response.data.tests);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);

    const handleTopicChange = (event) => {
        setSelectedTopic(event.target.value);
    };

    return (
        <div>
            <h1>Questionnaire</h1>
            <label>
                Select Test Topic:
                <select value={selectedTopic} onChange={handleTopicChange}>
                    <option value="">All Topics</option>
                    {testsData.map((test, index) => (
                        <option key={index} value={test.topic}>
                            {test.topic}
                        </option>
                    ))}
                </select>
            </label>

            {testsData.map((test, index) => {
                if (selectedTopic && test.topic !== selectedTopic) {
                    return null; // Skip rendering if topic doesn't match the selected one
                }

                return (
                    <div key={index}>
                        <h2>{test.topic}</h2>
                        {test.test.map((questions, questionIndex) => (
                            <div key={questionIndex}>
                                {questions.map((question, optionIndex) => (
                                    <div key={question.q_no}>
                                        <p>{question.question}</p>
                                        <ul>
                                            {question.options.map((option, index) => (
                                                <li key={index}>
                                                    <input
                                                        type="checkbox"
                                                        value={option}
                                                        checked={selectedOptions[questionIndex] === index}
                                                        onChange={() => handleOptionChange(questionIndex, index)}
                                                    />
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                );
            })}

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default QuestionnairePage;
