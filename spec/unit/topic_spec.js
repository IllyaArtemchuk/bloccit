const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require('../../src/db/models').Topic;
const Post = require("../../src/db/models").Post;

describe("Topic", ()=> {
    beforeEach((done)=> {
        this.topic;
        sequelize.sync({force: true}).then((res)=> {
            Topic.create({
                title: "How to brush a cat",
                description: "Step 1: get cat"
            })
            .then((topic)=> {
                this.topic = topic;
                done();
            })
            .catch((err)=> {
                console.log(err)
                done();
            });
        })
    })

    describe("#create", ()=> {
    it("should create a topic object and it should exist in the database", (done)=> {
       Topic.create({
           title: "this should exist",
           description: "I hope it does"
       }) 
       .then((topic)=> {
            expect(topic.title).toBe("this should exist");
            expect(topic.description).toBe("I hope it does");
            done();
       })
       .catch((err)=> {
           console.log(err);
           done();
       })
    })
})
describe("#getPosts", ()=> {
    it("should return an array of posts with a post already inside with the expected values.", (done)=> {
        Post.create({
            title: "Issue with the material",
            body: "What if I cant find a cat",
            topicId: this.topic.id
        })
        .then(()=> {
            this.topic.getPosts()
            .then((posts)=> {
                expect(posts[0].title).toBe("Issue with the material");
                done();
            })
            .catch((err)=> {
                console.log(err);
                done();
            })
        })
    })
})


})