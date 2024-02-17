// backend/tasks.js
const Agenda = require('agenda');
const mongoose = require('mongoose');
const User = require('../models/User'); // Import your User model or adjust the path accordingly

const mongoConnectionString = 'mongodb+srv://maheshpatil:NM8Ft1YhELDGll4N@cluster0.zqbcnis.mongodb.net/?retryWrites=true&w=majority';
const agenda = new Agenda({ db: { address: mongoConnectionString, collection: 'tasks' } });

// Define your scheduled task
agenda.define('subtractAmount', async (job) => {
  try {
    // Retrieve user by accountId
    const user = await User.findById(job.attrs.data.accountId);

    // Check if the user exists
    if (user) {
      const deductionAmount = job.attrs.data.amount;

      // Use the deductAmountFromBalance method to deduct the amount
      const deductionResult = await user.deductAmountFromBalance(deductionAmount);
      const additonResult = await user.addAmountToSip(deductionAmount);

      if (deductionResult || additonResult) {
        console.log(`Amount deducted and added successfully for user with ID: ${user._id}`);
      } else {
        console.log(`Insufficient balance for user with ID: ${user._id}`);
      }

    //   if (additionResult) {
    //     console.log(`Amount added successfully for user with ID: ${user._id}`);
    //   } 
    //   else {
    //     console.log(`Insufficient balance for user with ID: ${user._id}`);
    //   }


    } else {
      console.log(`User with ID ${job.attrs.data.accountId} not found`);
    }
  } catch (error) {
    console.error('Error during deductAmount task:', error);
  }
});

module.exports = agenda;
