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

  //console.log(req.body.message);
  //return req.body["message"];
  //return res.json(req.body);

  const { spawn } = require("child_process");
  //var counter = 0;
  spawn(
    //cd ../../justcollab-site && touch 2abc.html && echo "${req.body.message}" >> 2abc.html
    `touch 2abc.html`,
    {
      detached: true
    }
  );

  /* const ss = spawn(
    `git add . && git commit -m 'init${
      counter == 0 ? counter++ : counter++
    }' && git push -u origin master`,
    { detached: true }
  ); */

  myShellScript.stdout.on("data", data => {
    console.log(data);
    // do whatever you want here with data
  });
  myShellScript.stderr.on("data", data => {
    console.error(data);
  });

  /* ss.stdout.on("data", data => {
    console.log(data);
    // do whatever you want here with data
  });
  ss.stderr.on("data", data => {
    console.error(data);
  }); */

  return res.json("{'url': 'justcollab'}");
});

module.exports = router;
