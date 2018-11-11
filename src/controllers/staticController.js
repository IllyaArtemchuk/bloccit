module.exports = {
    index(req, res, next){
        res.render("static/index.ejs");
    },
    marco(req, res, next){
        res.send("polo");
    },
    about(req, res, next){
        res.render("static/partials/about");
    }
}