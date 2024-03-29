const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        lat: {
            type: Number,
            default: -1
        },
        long: {
            type: Number,
            default: -1
        },
        address: {
            type: String,
        },
    },
    companyGenre: {
        type: String,
        default:"Not Set"
    },
    logo: {
        type: String,
        default: "data:image/png;base64,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"
    },
    GSTNO: {
        type: Number,
        default: 0
    },
    Grole: {
        type: String
    },
    dob: {
        type: String,
        default:"Not Set"
    },
})

const Profile = mongoose.model('profile', profileSchema);
module.exports = Profile;