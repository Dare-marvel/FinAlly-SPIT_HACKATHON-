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
    pic: {
        type: String,
        default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
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
        acc_name: String,
        acc_id: String,
        bank_name: String,
        balance_amt: Number, 
    },
    walletamt: {
        type: Number,
    }
    ,
    sip: {
        amt: Number,
        streak: Number,
        
    },
    points: {
        type: Number,
        
    }
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
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10);
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


const User = mongoose.model('user', userSchema);
module.exports = User;