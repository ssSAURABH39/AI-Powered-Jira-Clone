const mongoose=require("mongoose");
const EmpSchema=new mongoose.Schema({
    empID:String,
    empName:String,
    empSkills:String
})
module.exports=mongoose.model("Emp",EmpSchema);