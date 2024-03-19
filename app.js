import './apis/register.js';
import './connectDB.js';

import express from 'express';
import createUser from './apis/register.js';
import loginUser from './apis/login.js';
import AddNewJob from './apis/addNewJob.js';

import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 5004;

const app = express();

app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Hi, I am running')
})

app.post('/login', async (req, res) => {
    await loginUser(req, res);
})

app.post('/register', async (req, res) => {
    await createUser(req, res);
})

app.post('/save_job', (req, res) => {

})

app.get('/list_all_jobs', (req, res) => {

})

app.post('/apply_job', (req, res) => {

})

app.post('/add_new_job', async (req, res) => {
    await AddNewJob(req, res);
})


app.listen(port, () => {
    console.log('hello world');
})