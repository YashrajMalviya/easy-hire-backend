import User from './../models/User.js'
import jwt from 'jsonwebtoken';

const loginUser =  async (req, res) => {

    const { email, password } = req.body;

    try {
        const checkUser = await User.findOne({ email });
        if (!checkUser) return res.status(400).json({ success: false, message: "Account do not exist" });
        console.log(checkUser.password);
        console.log(password);

        const isMatch = password === checkUser.password;
        if (!isMatch) return res.status(400).json({ success: false, message: "Email or password is incorrect" });

        // const token = jwt.sign({ id: checkUser._id, email: checkUser.email }, process.env.JWT_SECREAT, { expiresIn: '1d' });
        const token = jwt.sign({ id: checkUser._id, email: checkUser.email }, 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4ODgxOTE2MCwiaWF0IjoxNjg4ODE5MTYwfQ.iEEucErVD4l-hGdHVF8I75P6oB4GkHy6b5cEEX6jx-c', { expiresIn: '1d' });
        const finalData = {token , user : checkUser}
        return res.status(200).json({ success: true, message: "Login Successfull",  finalData})

    } catch (error) {
        console.log('Error in register (server) => ', error);
        return res.status(500).json({ success: false, message: "Something Went Wrong Please Retry Later !" })
    }
}

export default loginUser;