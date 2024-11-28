/* eslint-disable no-undef */
import mongoose from 'mongoose';
const studentSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: [true, 'name is required'],
  },
  age: {
    type: 'string',
    required: [true, 'age is required'],
  },
  department: {
    type: 'string',
    required: [true, 'department is required'],
  },
});

const Student = new mongoose.model('student', studentSchema);

export default Student;
// mobileNo: {
//   type: 'string',
//   required: [true, 'age is required'],
// },
// email: {
//   type: email,
// },
// isFeesPaid: {
//   type: Boolean,
// },
// department: {
//   type: 'string',
//   required: [true, 'department is required'],
// },
// currentYear: {
//   type: 'string',
// },
// currentSem: {
//   type: 'string',
// },
