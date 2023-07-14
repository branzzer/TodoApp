const mongoose = require('mongoose')


const connectDb = async (url) => {

    try {
        await mongoose.connect(url)
        console.log(`connected to mongodb `)
    } catch (error) {
        console.log(`error connecting to mongodb ERROR => ${error}`)
    }
}

module.exports = {
    connectDb
}