import StudentModel from "../models/studentmodel.js";


const addStudent= async (req,res)=>{
  try{
    const data = req.body;

    const createdStudent= await StudentModel.create(data)
    res.status(201).send({ status:"Student Added Successfully",message:createdStudent})
  }
  catch(error){
    return res.status(400).send({
        status:'Invalid request data',message:error.message
    })
  }

}

const findStudent=async(req,res)=>{
   

    try{

        const Student=await StudentModel.find();
    res.status(200).send({ status:"Array of Students matching the search criteria",message:Student})
    }
      
    catch(error){
        return res.status(400).send({
            status:' Invalid search parameters',message:error.message

        })
    }
}

const findOneStudent=async(req,res)=>{
   

        try{
            const {StudentId}=req.body;
            const oneStudent=await StudentModel.findOne({StudentId:StudentId});
        res.status(200).send({ status:"Student matching to the  Id",message:oneStudent})
        }
          
        catch(error){
            return res.status(400).send({
                status:' Invalid search parameters',message:error.message
    
            })
        }

}
const updateStudent=async(req,res)=>{
   
     const {StudentId}=req.body;
    const newData = req.body;
    const newStudent=await StudentModel.findByIdAndUpdate({_id:StudentId}, newData, { new: true });
    res.status(200).send({ status:"Student updated successfully",message:newStudent})
      


}

const deleteStudent=async (req,res)=>{
    try{
        const {StudentId}=req.body;
      const deleteddata=await StudentModel.deleteOne({StudentId:StudentId})
      return res.status(200).send({status:"Student deleted successfully",message:deleteddata});
    }
    catch(error){
     return res.status(404).send({
         status:'Student not found',message:error.message
     })
    }
 }



export{addStudent,findStudent,findOneStudent,updateStudent,deleteStudent};