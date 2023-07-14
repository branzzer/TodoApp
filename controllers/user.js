const { User } = require("../models/user");
const { createTokenForUser } = require("../services/auth");

const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.findOne({ email })

        if (user) return res.render('signup', { emailAlreadyExist: "User with this email Id already have a account" })

        await User.create({ name, email, password })

        return res.redirect('/')

    } catch (error) {
        console.log(`Error in signUp ERROR => ${error}`)
    }
}







const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        const isMathced = await User.checkPassword(email, password);
        if (!user) return res.render('login', { userNotFound: "invalid email or password" })
        if (!isMathced) return res.render('login', { userNotFound: "invalid password" })

        const token = createTokenForUser(user);



        res.cookie("token", token)
        return res.redirect('/')

    } catch (error) {
        console.log(`Error in login ERROR => ${error}`)
    }
}


const logout = async (req, res) => {
    res.clearCookie('token');
    return res.redirect('/')
}

module.exports = {
    signup,
    login,
    logout
}