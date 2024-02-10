const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const companyAuthenticate = require("../middleware/companyAuthenticate");
const cookieParser = require("cookie-parser");
router.use(cookieParser());
const User = require("../models/User");
const Vendor = require("../models/Bank");
const Dashboard = require("../models/Dashboard");
const Order = require("../models/Order");
const Profile = require("../models/Profile");


router.get("/fetchMCQs", async (req, res) => {
    try {
        const mcqsData = await Mcqs.find();
        return res.json({ success: true, mcqs: mcqsData });
    } catch (error) {
        console.error('Error fetching MCQs:', error.message);
        return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

router.post('/submitMcqs', async (req, res) => {
    try {
        const mcqData = req.body; // Assuming you're sending MCQ data in the request body

        // Validate mcqData based on your model's schema before saving
        // ...

        // Calculate the user's score
        const totalQuestions = mcqData.topicwise_tests.reduce((acc, topic) => acc + topic.test.length, 0);
        const correctAnswers = mcqData.topicwise_tests.reduce((acc, topic) => {
            return acc + topic.test.reduce((acc, questions) => {
                return acc + questions.reduce((acc, question) => {
                    return acc + (question.user_ans === question.correct_answer ? 1 : 0);
                }, 0);
            }, 0);
        }, 0);

        const score = (correctAnswers / totalQuestions) * 100;

        // Save MCQ data along with the calculated score
        const newMcqs = new Mcqs({ ...mcqData, score });
        const savedMcqs = await newMcqs.save();

        res.status(201).json({ savedMcqs, score });
    } catch (error) {
        // Handle any errors
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
