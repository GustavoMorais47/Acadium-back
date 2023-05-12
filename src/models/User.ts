import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    cpf: {
        type: String,
        unique: true,
        validate: {
            validator: (cpf: string) => {
                return cpf.length === 11;
            },
            message: "CPF inválido!",
        },
    },
    email: String,
    role: Array<Number>,
    password: String,
})

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;