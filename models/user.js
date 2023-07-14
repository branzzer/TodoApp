const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})


userSchema.pre('save', async function (next) {
    const user = this

    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10); // Generate a salt with 10 rounds of hashing
    const hashedPassword = await bcrypt.hash(user.password, salt);


    this.password = hashedPassword
})


userSchema.static("checkPassword", async function (email, password) {
    const user = await User.findOne({ email });

    if (!user) throw new Error('invalid email or password');

    return bcrypt.compare(password, user.password)



})


const User = mongoose.model("user", userSchema)

module.exports = {
    User
}