const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();
/* require('dotenv').config(); */
const { setupServer } = require("../server");
const { dinos } = require("../data/dinos");



const server = setupServer();
describe("Dinosaur API Server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  describe("dinoAPI basics", () => {
    describe("GET /api/dinosaur_db", () => {
      it("should return a list of all dinos in the db", async () => {
        const res = await request.get("/api/dinosaur_db");
        expect(res.body[1].name).to.deep.equal(dinos[1].name)
        res.should.have.status(200)
      })
    })
    describe("GET /api/dinosaur_db/:name", () => {
      it("should return the correct dinosaur when given a valid name", async () => {
        const res = await request.get("/api/dinosaur_db/Iguanadon");
        expect(res.body.name).to.deep.equal(dinos[3].name);
      })
      it("should return an error when given an invalid name", async () => {
        const res = await request.get("/api/dinosaur_db/Iguana");
        res.should.have.status(404);
      });
    });
    describe.only("POST /api/dinosaur_db/", () => {
      /* console.log('🔥 about to try to connect') */
      it("should add a dinosaur of a given name", async () => {
        const res = await request.post("api/dinosaur_db/").send({name: 'Minmi'});
        expect(res.body).to.equal("Minmi added!")
      })
    })
    describe("PATCH /api/dinosaur_db/:name", () => {
      it("should add info to an already extant dino", async () => {
        const newData = {
          size: "small",
          eats: "plants",
          comments: "I like it...I wanna look at another one."
        }
        const res = await request.post("api/dinosaur_db/Minmi").send(newData)
        console.log(res.body)
      })
    })
  });
});
