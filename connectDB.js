import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 5004;
const uri = process.env.DB_URI

import mongoose from 'mongoose'

const connectDatabase = async () => {
    try {      
        await mongoose.connect(uri)
        console.log('Connected to mongodb database successfully!')
    } catch (err) {
        console.log(err)
    }
}
connectDatabase()
