import Job from '../models/job.js'

const AddNewJob =  async (req, res) => {

    const data = req.body;
    const { recruiter ,title,description , compensation , company , email , application_cutoff_date } = data;

    try {
        const createJob =  await Job.create({recruiter , title,description , compensation , company , email , application_cutoff_date });
        return res.status(200).json({ success: true, message: "Job Added Successfully !" })
    } catch (error) {
        console.log('Error  => ', error);
        return res.status(500).json({ success: false, message: "Unable to add the JOB at the moment, Pls try later" })
    }
}

export default AddNewJob;