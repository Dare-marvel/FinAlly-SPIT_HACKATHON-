const mongoose = require('mongoose');

const mcqSchema = new mongoose.Schema({

    topicwise_tests:[
        {
            topic: {
                type: String,
                required: true
            },
            test:[
                {
                    q_no:{
                        type: Number,
                        required: true
                    },
                    question: {
                        type: String,
                        required: true
                    },
                    options: {
                        type: Array,
                        required: true
                    },
                    user_ans:{
                        type: Number,
                        required: true,
                        default: -1
                    },
                    correct_answer: {
                        type: Number,
                        required: true
                    } 
                },      
            ],
            
        }
    ],
   
}
);


const Mcqs = mongoose.model('mcqschema', mcqSchema);
module.exports = Mcqs;