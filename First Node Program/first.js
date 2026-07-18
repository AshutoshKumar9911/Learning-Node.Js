console.log("Ashutosh be focus on study. You have to be Successful");

const fs = require('fs');
fs.writeFile("output.txt", "Always try to be honest",(err)=>{
  if (err) console.log("Error Occurred");
  else console.log('File written Successfully'); 
})
