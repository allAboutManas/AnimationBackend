import express from 'express';
import{addCourse,findCourse,findOneCourse,updateCourse,deleteCourse} from "../controller/coursecontrol.js";
import { addStudent,findStudent,findOneStudent,updateStudent,deleteStudent} from "../controller/studentcontrol.js";
const router= express.Router();


router.post('/createcourse',addCourse);
router.get('/courses',findCourse);
router.get('/course',findOneCourse);
router.put('/updatecourse',updateCourse);
router.delete('/deletecourse',deleteCourse);

router.post('/createstudent',addStudent);
router.get('/students',findStudent);
router.get('/student',findOneStudent);
router.put('/updatestudent',updateStudent);
router.delete('/deletestudent',deleteStudent);





export default router;