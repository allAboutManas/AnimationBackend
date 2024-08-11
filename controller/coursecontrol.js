import courseModel from "../models/coursemodel.js";


const addCourse= async (req,res)=>{
  try{
    const data = req.body;

    const createdcourse= await courseModel.create(data)
    res.status(201).send({ status:"Course Added Successfully",message:createdcourse})
  }
  catch(error){
    return res.status(400).send({
        status:'Invalid request data',message:error.message
    })
  }

}

const findCourse=async(req,res)=>{
   

    try{

        const course=await courseModel.find();
    res.status(200).send({ status:"Array of Courses matching the search criteria",message:course})
    }
      
    catch(error){
        return res.status(400).send({
            status:' Invalid search parameters',message:error.message

        })
    }
}

const findOneCourse=async(req,res)=>{
   

        try{
            const {courseId}=req.body;
            const oneCourse=await courseModel.findOne({courseId:courseId});
        res.status(200).send({ status:"Course matching to the  Id",message:oneCourse})
        }
          
        catch(error){
            return res.status(400).send({
                status:' Invalid search parameters',message:error.message
    
            })
        }

}
const updateCourse=async(req,res)=>{
   
     const {courseId}=req.body;
    const newData = req.body;
    const newCourse=await courseModel.findByIdAndUpdate({_id:courseId}, newData, { new: true });
    res.status(200).send({ status:"Course updated successfully",message:newCourse})
      


}

const deleteCourse=async (req,res)=>{
    try{
        const {courseId}=req.body;
      const deleteddata=await courseModel.deleteOne({courseId:courseId})
      return res.status(200).send({status:"Course deleted successfully",message:deleteddata});
    }
    catch(error){
     return res.status(404).send({
         status:'Course not found',message:error.message
     })
    }
 }



export{addCourse,findCourse,findOneCourse,updateCourse,deleteCourse};