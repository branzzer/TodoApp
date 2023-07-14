const express = require('express');
const path = require('path')
const dotenv = require('dotenv');
const methodOverride = require('method-override')
const { connectDb } = require('./configDb');
const staticRoutes = require('./routes/static')
const userRouter = require('./routes/user')
const taskRouter = require('./routes/todo');
const { checkForAuthentication } = require('./middlewares/auth');
const cookieParser = require('cookie-parser');

dotenv.config()
connectDb(process.env.MONGO)

const app = express();
const PORT = process.env.PORT


app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(methodOverride('_method'));


app.use(cookieParser());



app.use('/', staticRoutes)
app.use('/user', userRouter)
app.use('/todo', checkForAuthentication, taskRouter)




app.listen(PORT, () => {
    try {
        console.log(`Express server is runnin gat ${PORT}`)

    } catch (error) {

    }
})



