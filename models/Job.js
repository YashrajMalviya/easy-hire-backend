import mongoose from 'mongoose';
import User from './User.js';

const JobSchema = new mongoose.Schema({

    recruiter : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    compensation: {
        type: Number,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    application_cutoff_date: {
        type: Date,
        required: true,
    },


},{timestamps: true});

const Job =  mongoose.model('JOB', JobSchema);

export default Job;