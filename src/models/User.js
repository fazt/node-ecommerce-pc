import { model, Schema } from 'mongoose'
import bcrypt, { genSalt } from 'bcryptjs'

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

userSchema.methods.validatePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

export default model('uSER', userSchema);
