const axios = require("axios");

const getTaskSuggestion = async (inputText) => {
  try {
    console.log("Get task suggestion for:",inputText);
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        contents: [{
          parts: [{ text: `Suggest a task name for: ${inputText}` }]
        }],
        // Optional: maxOutputTokens, temperature, etc.
      },
      {
        headers: { "Content-Type": "application/json" },
        params: { key: process.env.GOOGLE_API_KEY }
      }
    );

    console.log("Response from Gemini:", response.data);

  
    return response.data.candidates?.slice(0,10)?.[0]?.content?.parts?.[0]?.text || "No suggestions";
  } catch (error) {
    console.error("Error in API:", error?.response?.data || error.message);
    return "Error fetching suggestions";
  }
};

const getTaskPrediction = async (inputText) => {
  try {
    console.log("Get task prediction for:",inputText);
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        contents: [{
          parts: [{ text: `Give answer in 1 line only.How much time it will take me to complete me to complete this task in hours: ${inputText}` }]
        }],
        // Optional: maxOutputTokens, temperature, etc.
      },
      {
        headers: { "Content-Type": "application/json" },
        params: { key: process.env.GOOGLE_API_KEY }
      }
    );

    console.log("Response from Gemini:", response.data);

  
    return response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No time prediction";
  } catch (error) {
    console.error("Error in API:", error?.response?.data || error.message);
    return "Error fetching predictions";
  }
};
module.exports = { getTaskSuggestion,getTaskPrediction };