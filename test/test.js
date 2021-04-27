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
        expect(res.body).to.deep.equal(dinos)
        res.should.have.status(200)
      })
    })
    describe("GET /api/dinosaur_db/:nameOrId", () => {
      it("should return the correct dinosaur when given a valid ID", async () => {
        const res = await request.get("/api/dinosaur_db/1");
        expect(res.body).to.deep.equal(dinos[0]);
      })
      it("should return the correct dinosaur when given a valid name", async () => {
        const res = await request.get("/api/dinosaur_db/Iguanadon");
        expect(res.body).to.deep.equal(dinos[3]);
      })
      it("should return an error when given an invalid param", async () => {
        const res = await request.get("/api/dinosaur_db/6");
        res.should.have.status(404);
      });
    });
    describe("POST /api/dinosaur_db", () => {
      it("should add a dinosaur of a given name", async () => {
        const res = await request.post("api/dinosaur_db").send({name: 'Minmi'});
        expect(res.body).to.equal("Minmi added!")
      })
    })
  });
});
