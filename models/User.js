import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
});

const User = mongoose.model('USER', UserSchema);

export default User;