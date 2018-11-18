const sequelize = require("../../src/db/models/index").sequelize;
const Flair = require("../../src/db/models").Flair;

describe ("Flair", ()=> {
    beforeEach((done)=> {
        this.Flair;
        sequelize.sync({force: true}).then((res)=> {
                Flair.create({
                    name: "News",
                    color: "Green",
                })
                .then((Flair)=> {
                    this.Flair = Flair;
                    done();
                })
                .catch((err)=> {
                    console.log(err);
                    done();
                })
            })
    })

    describe("#create()", ()=> {
        it("should create a Flair object with a name and color", (done)=> {
            Flair.create({
                name: "Meme",
                color: "Orange"
            })
            .then((Flair)=>{
                expect(Flair.name).toBe("Meme");
                expect(Flair.color).toBe("Orange");
                done();
            })
            .catch((err)=>{
                console.log(err);
                done();
            })
        })

        it("should not create a Flair with a missing name or color", (done)=> {
            Flair.create({
                name: "Question"
            })
            .then((Flair)=> {
                done();
            })
            .catch((err)=> {
                expect(err.message).toContain("Flair.color cannot be null");
                done();
            })
        });
    })

})