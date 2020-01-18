const express = require("express");
const router = express.Router();

const fs = require('fs');


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

  const { exec } = require("child_process");
  //var counter = 0;
  exec('cd justcollab-site && touch 2abc.html', function(error, stdout, stderr) {
    if (error) {
      console.log(error.message);
    } else {
      fs.writeFile("justcollab-site/2abc.html", req.body.message, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
     
        console.log("JSON file has been saved.");
      });
    }
  });
    //

  /* const ss = spawn(
    `git add . && git commit -m 'init${
      counter == 0 ? counter++ : counter++
    }' && git push -u origin master`,
    { detached: true }
  ); */

  

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
