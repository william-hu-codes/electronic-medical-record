require('dotenv').config();

const { Configuration, OpenAIApi } = require("openai");
const Patient = require("../models/patient");
const User = require("../models/user");
//progressNote
//const patient = await Patient.findById(req.params.patientId)

//    lowercase config here...upper case config line 1
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration)

async function dischargeSummary(req, res, next) {
    try {
    
      const patient = await Patient.findById(req.params.patientId);
  
      const chat_completion = await openai.createChatCompletion({
        model: "text-davinci-003",
        prompt: `Please generate a discharge summary for this patient, ${patient.name},
                 based on all progress notes provided. Progress notes: ${patient.progressNote}`,
      });
      //change patient note when merge

      const generatedSummary = chat_completion.choices[0].text;

     
      patient.dischargeSum.push(generatedSummary);
  
      
      await patient.save();
  
      
      res.render('patients/dischargeSummary', {
        patient: patient,
        dischargeSummary: generatedSummary
    }); 
  }catch (error) {
      
      next(error);
    }
  }
  
module.exports = {
  dischargeSummary
};