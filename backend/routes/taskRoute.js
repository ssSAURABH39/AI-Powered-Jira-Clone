const express =require("express");
const router =express.Router();
const { suggestTask, getAllTask,createTask}=require("../controller/taskController");


router.post("/suggest",suggestTask);
router.post("/createTask",createTask);
router.get("/getTaskList",getAllTask);
module.exports=router;