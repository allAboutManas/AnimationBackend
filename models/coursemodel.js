import mongoose from "mongoose";


const courseSchema = new mongoose.Schema({
    coursename:{
        type:String,
        required:true,
        unique:true
    },
  
    minimumFees:{
        type:Number,
        required:true,
        default:0
    },
    maximumFees:{
        type:Number,
        required:true,
        default:0
    },
    courseDuration:{
        type:Number,
        required:true,
        default:0
    },
    courseId:{
        type:Number,
        required:true,
        unique:true
    },
   
    img:{
        type:String,
        required:true
    },
    syllabus:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    },

},{timestamps:true})

export default mongoose.model("course",courseSchema);