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

  return res.json("{'url': 'justcollab'}");
});

module.exports = router;
