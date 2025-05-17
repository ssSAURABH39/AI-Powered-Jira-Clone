const Emp=require("../model/Emp");

//create emp
exports.createEmp=async(req,res)=>{
    try {
        const {empID,empName,empSkills}=req.body;
    const emp=new Emp({empID,empName,empSkills});
    await emp.save();
    res.json(emp);
    } catch (error) {
        console.log("Error while saving emp",error);
        res.status(500).json({"error":"Internal server error"})
    }
}

//get emp
exports.getAllEmp=async(req,res)=>{
    try {
        const emp=await Emp.find();
        res.json(emp);
    } catch (error) {
        console.log("Error while saving emp",error);
        res.status(500).json({"error":"Internal server error"})
    }
}