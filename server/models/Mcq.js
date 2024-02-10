const mongoose = require('mongoose');

const mcqSchema = new mongoose.Schema({

    tests:[
        {
            topic: {
                type: String,
                required: true
            },
            test:[
            [
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
                    answer: {
                        type: String,
                        required: true
                    } 
                },
            ],        
            ],
            
        }
    ],
   
}
);


const Mcqs = mongoose.model('mcqschema', mcqSchema);
module.exports = Mcqs;