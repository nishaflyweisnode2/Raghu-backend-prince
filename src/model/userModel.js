const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        // required: true,
        unique: true,
    },
    password: {
        type: String,
        // required: true
    },
    mobileNumber: {
        type: String,
        // required: true,
        unique: true,
    },
    otp: {
        type: String,
        // required: true,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    userType: {
        type: String,
        enum: ["Admin", "User"],
        default: "User"
    },
    profileImage: {
        type: String,
        // required: true
    },
    firstName: {
        type: String,
        // required: true
    },
    lastName: {
        type: String,
        // required: true
    },
    schoolName: {
        type: String,
        // required: true
    },
    qualification: {
        type: String,
        // required: true
    },
    savedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    }],

}, { timestamps: true })

const user = mongoose.model('User', userSchema);


module.exports = user;
