const express = require("express");
const router = express.Router();

/* 
    @route      POST api/register/
    @desc       Hosting the website from the link
    @access     Public 
*/

router.post("/", (req, res) => {
  const body = req.body.jsonfile;

  console.log(body);
});

module.exports = router;
