import './../models/User.js'

const createUser =  async (req, res) => {

    const { email, password, name, phone } = req.body;

    if(!email || !password || !name || !phone) {
        return res.status(400).json({ success: false, message: "Kindly provide all data" });
    }

    try {
        const checkPresence = await User.findOne({ email });
        console.log(checkPresence);
        if (checkPresence) {
            return res.status(400).json({ success: false, message: "Email is already used, Pls try another one" });
        }

        else {
            const createUser = await User.create({ email, name, password, phone});
            return res.status(201).json({ success: true, message: "Account created successfully" });
        }
    } catch (error) {
        console.log('Error in register (server) => ', error);
        return res.status(500).json({ success: false, message: "Something Went Wrong Please Retry Later !" })
    }
}

export default createUser;