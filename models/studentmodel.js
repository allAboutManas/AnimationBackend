import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,

    },
    lastname:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["Male","Female","Other"],
        required:true,

    },
    dob:{
        type:String,
        required:true
    },
    studentId:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    
    phone:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true,

    },
    fatherName:{
        type:String,
        required:true,

    },
    motherName:{
        type:String,
        required:true,

    },
    highSchoolMarksfile:{
        type:String,
        required: true, 
    },
    intermediateMarksfile:{
        type:String,
        required: true, 
    },
   
    admissionDate:{
        type:String,
        required:true,
    },
    aadharNumber:{
     type:Number,
     required:true,
     unique:true
    },
   
    aadharImage:{
        type:String,
        required:true
    },
    studentImage:{
        type:String,
        required:true
    },
    courseFees:{
        type:Number,
        required:true
    },
    coursesEnrolled:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"course"
    },

},{timestamps:true})


export default mongoose.model("student",studentSchema);