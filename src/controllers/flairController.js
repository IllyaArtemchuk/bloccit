flairQueries = require("../db/queries.flairs.js");


module.exports ={
    new(req, res, next){
        res.render("flairs/new");
    },
    create(req, res, next){
        let newflair = {
            title: req.body.title,
            body: req.body.body
        };
        flairQueries.addflair(newflair, (err, flair)=> {
            if(err){
                res.redirect(500, `/flairs/new`)
            } else {
                res.redirect(303, `/flairs/${flair.id}`)
            }
        })
    },
    show(req, res, next){
        flairQueries.getflair(req.params.id, (err, flair)=> {
            if(err || flair == null){
                res.redirect(404, "/")
            } else {
                res.render("flairs/show", {flair})
            }
        });
    },
    destroy(req, res, next){
        flairQueries.deleteflair(req.params.id, (err, deletedRecordsCount)=> {
            if(err){
                res.redirect(500, `/topics/${req.params.topicId}/flairs/${req.params.id}`)
            } else {
                res.redirect(303, `/topics/${req.params.topicId}`)
            }
        })
    },
    edit(req, res, next){
        flairQueries.getflair(req.params.id, (err, flair)=> {
            if(err || flair == null){
                res.redirect(404, "/");
            } else {
                res.render("flairs/edit", {flair});
            }
        });
    },
    update(req, res, next){
        flairQueries.updateflair(req.params.id, req.body, (err, flair)=> {
            if(err || flair == null){
                res.redirect(404, `/topics/${req.params.topicId}/flairs/${req.params.id}/edit`)
            } else {
                res.redirect(`/topics/${req.params.topicId}/flairs/${req.params.id}`)
            }
        })
    }
}