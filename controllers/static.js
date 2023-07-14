const Todo = require("../models/todo")

const homePage = async (req, res) => {

    try {
        if (!req.user) return res.redirect('/login')

        const tasks = await Todo.find({ createdBy: req.user._id }).sort({ createdAt: -1 })

        return res.status(200).render('home', { tasks: tasks, user: req.user })
    } catch (error) {
        console.log(`Something wrong in homePage contoller in ERROR =>${error}`)
    }
}

const signup = async (req, res) => {
    try {
        return res.render('signup')
    } catch (error) {
        console.log(`Error in signUp ERROR => ${error}`)
    }
}

const login = async (req, res) => {
    try {
        return res.render('login')
    } catch (error) {
        console.log(`Error in signUp ERROR => ${error}`)
    }
}


module.exports = {
    homePage,
    signup,
    login

}