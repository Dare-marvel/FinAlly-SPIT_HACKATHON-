import React, { useEffect, useState } from 'react';
import axios from 'axios';

const dummymcqs = {
    "topicwise_tests": [
        {
            "topic": "Mutual Fund",
            "test": [
                {
                    "q_no": 1,
                    "question": "What is the NAV (Net Asset Value) of a mutual fund?",
                    "options": ["A. Net Available Value", "B. Net Asset Volume", "C. Net Asset Value", "D. Net Accountable Value"],
                    "user_ans": -1,
                    "correct_answer": 2
                },
                {
                    "q_no": 2,
                    "question": "Which type of mutual fund invests in a mix of stocks and bonds?",
                    "options": ["A. Equity Fund", "B. Debt Fund", "C. Hybrid Fund", "D. Money Market Fund"],
                    "user_ans": -1,
                    "correct_answer": 2
                }
            ]
        },
        {
            "topic": "Stock",
            "test": [
                {
                    "q_no": 1,
                    "question": "What does IPO stand for?",
                    "options": ["A. Initial Public Offering", "B. Internal Private Operation", "C. Investment Portfolio Option", "D. International Public Offer"],
                    "user_ans": -1,
                    "correct_answer": 0
                },
                {
                    "q_no": 2,
                    "question": "Which index represents the performance of the Bombay Stock Exchange (BSE)?",
                    "options": ["A. NSE Nifty", "B. BSE Sensex", "C. CNX Midcap", "D. NSE Bank Nifty"],
                    "user_ans": -1,
                    "correct_answer": 1
                }
            ]
        },
        {
            "topic": "Real Estate",
            "test": [
                {
                    "q_no": 1,
                    "question": "What does ROI stand for in real estate?",
                    "options": ["A. Return on Investment", "B. Real Ownership Index", "C. Rental Operating Income", "D. Realistic Opportunity Indicator"],
                    "user_ans": -1,
                    "correct_answer": 0
                },
                {
                    "q_no": 2,
                    "question": "Which factor is NOT typically considered when evaluating a property's value?",
                    "options": ["A. Location", "B. Square Footage", "C. Color of Walls", "D. Amenities"],
                    "user_ans": -1,
                    "correct_answer": 2
                }
            ]
        },
        {
            "topic": "Fixed Deposit",
            "test": [
                {
                    "q_no": 1,
                    "question": "What is the minimum lock-in period for a 5-year tax-saving fixed deposit in India?",
                    "options": ["A. 1 year", "B. 3 years", "C. 5 years", "D. 10 years"],
                    "user_ans": -1,
                    "correct_answer": 2
                },
                {
                    "q_no": 2,
                    "question": "Which bank issued the first fixed deposit receipt in India?",
                    "options": ["A. State Bank of India", "B. Punjab National Bank", "C. Bank of India", "D. Central Bank of India"],
                    "user_ans": -1,
                    "correct_answer": 0
                }
            ]
        },
        {
            "topic": "Recurring Deposit",
            "test": [
                {
                    "q_no": 1,
                    "question": "In a Recurring Deposit (RD), the interest is compounded:",
                    "options": ["A. Annually", "B. Semi-annually", "C. Quarterly", "D. Monthly"],
                    "user_ans": -1,
                    "correct_answer": 3
                },
                {
                    "q_no": 2,
                    "question": "What happens if a person misses a monthly deposit in an RD?",
                    "options": ["A. No penalty", "B. Penalty on interest earned", "C. Account is closed", "D. Penalty on principal amount"],
                    "user_ans": -1,
                    "correct_answer": 1
                }
            ]
        },
        {
            "topic": "Cryptocurrency",
            "test": [
                {
                    "q_no": 1,
                    "question": "What is blockchain?",
                    "options": ["A. A type of cryptocurrency", "B. A programming language", "C. A decentralized distributed ledger", "D. A traditional banking system"],
                    "user_ans": -1,
                    "correct_answer": 2
                },
                {
                    "q_no": 2,
                    "question": "Which cryptocurrency was the first to be created?",
                    "options": ["A. Ethereum", "B. Bitcoin", "C. Ripple", "D. Litecoin"],
                    "user_ans": -1,
                    "correct_answer": 1
                }
            ]
        },
        {
            "topic": "Personal Finance",
            "test": [
                {
                    "q_no": 1,
                    "question": "What is the 50/30/20 rule in budgeting?",
                    "options": ["A. A tax code", "B. A retirement plan", "C. A budgeting rule", "D. A loan agreement"],
                    "user_ans": -1,
                    "correct_answer": 2
                },
                {
                    "q_no": 2,
                    "question": "What does APR stand for in the context of loans?",
                    "options": ["A. Annual Percentage Rate", "B. Average Personal Record", "C. Advanced Payment Requirement", "D. Annual Property Rent"],
                    "user_ans": -1,
                    "correct_answer": 0
                }
            ]
        }
        // Add more topics and questions as needed
    ]
}




const MCQ = () => {

    const initialArray = Array.from({ length: 5 }, () => '');

    const [testsData, setTestsData] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState('');
    const [selectedOptions, setSelectedOptions] = useState(initialArray);
    const [gotData, setgotData] = useState(false);
    const [myTest, setmyTest] = useState([]);
    const [gotTestArray, setgotTestArray] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: null,
    });
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        document.title = "Sangrah | Profile";
        getUserInfo();
    }, []);
    const getUserInfo = async () => {
        try {
            const c = await axios.get("/profile", {
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
                console.log(error.response.data);
            } else {
                console.log(error);
            }
        }
    };
    useEffect(() => {
        // Fetch data from your API endpoint
        const fetchData = async () => {
            try {
                // alert('Fetching data...');
                const response = await axios.get('/fetchMCQs');
                // alert(response.data)
                setTestsData(response.data);
                setgotData(true);
                // console.log('Data fetched successfully:', response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        // const handlePopulateData = async () => {
        //     try {
        //       const response = await axios.post('populate_data',dummymcqs);

        //       console.log('Data populated successfully:', response.data);
        //     } catch (error) {
        //       console.error('Error populating data:', error.response.data);
        //     }
        //   };

        // handlePopulateData();  
        fetchData();
    }, []);



    const handleTopicChange = (e) => {
        setSelectedTopic(e.target.value);
        setSelectedOptions([]); // Reset selected options when the topic changes
    };

    const handleOptionChange = (questionIndex, optionIndex) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[questionIndex] = optionIndex;
        setSelectedOptions(updatedSelectedOptions);
    };

    const handleSubmit = async () => {
        try {
            console.log("submitted");
            // Replace 'your-api-endpoint' with your actual backend API endpoint
            console.log("SELECTED OPTIONS 1: ", selectedOptions[0]);
            console.log("SELECTED OPTIONS 2: ", selectedOptions[1]);
            console.log("MY TEST", myTest)
            console.log("CORRECT OPTIONS1:", myTest[0].test[0].correct_answer);
            console.log("CORRECT OPTIONS2:", myTest[0].test[1].correct_answer);
            let myscore = 0
            let curruser = user.email
            if (selectedOptions[0] === myTest[0].test[0].correct_answer) {
                myscore = myscore + 1;
            }
            if (selectedOptions[1] === myTest[0].test[1].correct_answer) {
                myscore = myscore + 1;
            }

            const response = await axios.post('/submitMcqs', { MYSCORE: myscore, CURRUSER: curruser });
            // Handle the response as needed
            console.log('Response from backend:', response.data);
        } catch (error) {
            console.error('Error sending data:', error.message);
        }
    };
    //     useEffect = () => ({

    //    })

    useEffect(() => {
        if (gotData) {

            console.log(testsData.topicwise_tests[0].test);
        }
        // console.log(testsData.topicwise_tests);
    }, [testsData])

    useEffect(() => {
        if (gotData) {
            const filteredData = testsData.topicwise_tests.filter(test => test.topic === selectedTopic);
            console.log(filteredData);
            setmyTest(filteredData);
            setgotTestArray(true);
        }
    }, [selectedTopic])

    useEffect(() => {
        console.log("MY TEST : ", myTest);

    }, [myTest])

    return (
        <div>
            <h1>Questionnaire</h1>

            {gotData && <label>
                Select Test Topic:

                <select value={selectedTopic} onChange={handleTopicChange}>
                    <option value="">All Topics</option>
                    {testsData.topicwise_tests.map((test, index) => (
                        <option key={index} value={test.topic}>
                            {test.topic}
                        </option>
                    ))}
                </select>
            </label>}

            {/* {myTest } */}
            {/* {myTest.map((testData, testIndex) => (
                <div key={testIndex}>
                    {testData.test.map((question, questionIndex) => (
                        <div key={questionIndex}>
                            <p>{question.question}</p>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                {question.options.map((option, optionIndex) => (
                                    <li key={optionIndex}>
                                        <input
                                            type="radio"
                                            name={question_${questionIndex}}
                                            value={question.user_ans}
                                        // Add your logic for checked attribute if needed
                                        />
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    </div>
      ))} */}

            {myTest.map((testData, testIndex) => (
                <div key={testIndex}>
                    {testData.test.map((question, questionIndex) => (
                        <div key={questionIndex}>
                            <p>{question.question}</p>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                {question.options.map((option, optionIndex) => (
                                    <li key={optionIndex}>
                                        <input
                                            type="radio"
                                            name={`question_${questionIndex}`}
                                            value={optionIndex}
                                            checked={selectedOptions[questionIndex] === optionIndex}
                                            onChange={() => handleOptionChange(questionIndex, optionIndex)}
                                        />
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}




            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default MCQ;