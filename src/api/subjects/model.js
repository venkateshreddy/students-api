import mongoose from 'mongoose'

const subjectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

const model = mongoose.model('Subjects', subjectSchema)

export default model