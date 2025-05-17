const Task=require("../model/Task");
const { getTaskSuggestion, getTaskPrediction } = require("../services/aiService");

exports.suggestTask = async (req, res) => {
    const { input } = req.body;

    try {
        const suggestions = await getTaskSuggestion(input);
        res.json({ suggestions });
    } catch (error) {
        console.error("Error generating suggestions:", error);
        res.status(500).json({ error: "Failed to generate suggestions" });
    }
}

exports.createTask = async (req, res) => {
    const {taskTitle, taskDesc, assignedEmp} = req.body;
    const estimatedTime=await getTaskPrediction(taskDesc);
    const task=new Task({taskTitle, taskDesc, assignedEmp,estimatedTime});
    await task.save();
    res.json(task);

    try {
        const suggestions = await getTaskSuggestion(input);
        res.json({ suggestions });
    } catch (error) {
        console.error("Error generating suggestions:", error);
        res.status(500).json({ error: "Failed to generate suggestions" });
    }
}

exports.getAllTask=async(req,res)=>{
    try {
        const tasks=await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }
}