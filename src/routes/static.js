const express = require("express");
const router = express.router();

router.get("/", (req, res, next)=> {
    res.send("welcome to bloccit");
});

module.exports = router;

