const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;
app.use(express.json());
require('./db/conn');
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(require('./routes/auth'));
app.use(require('./routes/vendor'));
// app.use(require('./routes/adminAuth'));
app.use(require('./routes/companyAuth'));
const Agenda = require('agenda');
const cookieParser = require('cookie-parser');
const agenda = require('./Tasks/task');
const User = require('./models/User');

app.use(cookieParser());

app.listen(PORT, () => {
    console.log('Server running at http://localhost:${PORT}');
})

app.get('/initialize-tasks', async (req, res) => {
    console.log("AGENDA STARTED")
    try {
        let email;

        // Check if req.cookies.inv_man exists and has the required properties
        if (req.cookies.inv_man && req.cookies.inv_man.role) {
            email = req.cookies.inv_man.email;

            // Synchronously find the user by email
            // const User = mongoose.model('user'); // Assuming 'user' is your model name
            const user = await User.findOne({ 'email': email });


            // Check if the user exists
            if (user) {
                // Schedule the subtractAmount task every 3 hours for the found user
                agenda.every('0.0001 hours', 'subtractAmount', { accountId: user._id.toString(), amount: 100 });
            } else {
                console.log('User not found');
            }

            console.log("AGENDA STARTED")
            agenda.start();

            res.status(200).send('Tasks initialized successfully');

        } else {
            res.status(400).send('Invalid or missing cookies');
        }
    } catch (error) {
        console.error('Error during initialization:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/getcookie', function (req, res) {
    res.send(req.cookies);
})