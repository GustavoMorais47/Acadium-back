import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    cpf: String,
    email: String,
    role: String,
    password: String,
})

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;