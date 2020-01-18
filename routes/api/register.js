const express = require("express");
const router = express.Router();

/* 
    @route      POST api/register/
    @desc       Hosting the website from the link
    @access     Public 
*/

router.post("/", (req, res) => {
  //const bodys = req;

  //console.log(req.body);

  console.log(req.body.message);
  //return req.body["message"];
  //return res.json(req.body);

  const exec = require('child_process').exec, child;
  var counter = 0;
  const myShellScript = exec(`git add . && git commit -m 'init${counter == 0 ? counter++ : counter++}'`);
  myShellScript.stdout.on('data', (data)=>{
      console.log(data); 
      // do whatever you want here with data
  });
  myShellScript.stderr.on('data', (data)=>{
      console.error(data);
  });

  return res.json("{'url': 'justcollab'}");
});

module.exports = router;
