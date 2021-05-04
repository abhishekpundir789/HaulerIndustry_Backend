const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    uid:{ type: String, required: true},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    profilePicUrl: { type: String, required: true },
    dateOfBirth: { type: String, required: true},
    timeStamp: { type: Date, required: true, default: Date.now },
    province: { type: String, required: true },
    city: { type: String, required: true },
    streetAddress: { type: String, required: true },
    unitNumber: { type: String, required: true },
    email: { type: String, required: true },
    contactNumber: { type: String, required: true },
    creditCardNumber: { type: Number, required: true },
    expiryDate: { type: String, required: true},
    cvv: { type: Number, required: true}
})

module.exports = mongoose.model('UserRegistration', userProfileSchema);