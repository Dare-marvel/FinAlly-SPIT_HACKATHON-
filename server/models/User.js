const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    phone: {
        type: Number,
        
    },
    password: {
        type: String,
        
    },
    confirmPassword: {
        type: String,
        
    },
    Grole: {
        type: String
    },
    tokens: [
        {
            token: {
                type: String,
                
            }
        }
    ],
    bank_account: {
        acc_id: {
            type: Number,
            default: 1234567890
        },
        bank_name: {
            type: String,
            default: "HDFC Bank"
        },
        balance_amt: {
            type: Number,
            default: 20000
        }
    },
    walletamt: {
        type: Number,
        default : 0
    }
    ,
    sip: {
        amt: {
            type: Number,
            default: 0
        },
        streak : {
            type: Number,
            default: 0
        }
    },
    points: {
        type: Number,
        default: 0
    },
    transactions: [
        {
            type : {
                type: String,
            },
            amt: {
                type: Number,
            },
            date: {
                type: Date,
            },
        }
    ]
}
);

// BANK ACC
// bank acc name
// bank acc id
// balance amt

// walletamt



// SIP
  // amt
  // streak
  // when the sip amt is refunded the streak is set back to 0

// POINTS

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
        if (this.confirmPassword) {
            this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10);
        }
    }
    next();
})

userSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (error) {
        console.log(error)
    }
}

userSchema.methods.deductAmountFromBalance = async function (amountToDeduct) {
    try {
        // Check if the balance is sufficient
        if (this.bank_account.balance_amt >= amountToDeduct) {
            this.bank_account.balance_amt -= amountToDeduct;
            await this.save();
            return true; // Indicate successful deduction
        } else {
            return false; // Insufficient balance
        }
    } catch (error) {
        console.log(error);
        return false; // Error occurred during deduction
    }
}

userSchema.methods.addAmountToSip = async function (amountToAdd) {
    try {
        this.walletamt += amountToAdd;
        await this.save();
        return true; // Indicate successful addition
    } catch (error) {
        console.log(error);
        return false; // Error occurred during addition
    }
}

const User = mongoose.model('user', userSchema);
module.exports = User;