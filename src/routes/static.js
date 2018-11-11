const express = require("express");
const router = express.Router();

router.get("/", (req, res, next)=> {
    res.send("welcome to bloccit");
});

router.get("/marco", (req,res,next)=> {
    res.send("polo")
})

module.exports = router;

