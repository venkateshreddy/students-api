import mongoose from 'mongoose'

const marksViewSchema = new mongoose.Schema({
    studentObj: [],
    subjectObj: [],
    marks: Number
});

marksViewSchema.methods = {
    view() {
        return {
            id: this._id,
            subject: this.subjectObj && this.subjectObj.length > 0 ? { name: this.subjectObj[0].name, id: this.subjectObj[0]._id } : null,
            student: this.studentObj && this.studentObj.length > 0 ? { name: this.studentObj[0].name, id: this.studentObj[0]._id } : null,   
            marks: this.marks
        }
    }
}
const model = mongoose.model('Marksviews', marksViewSchema);

export default model;
