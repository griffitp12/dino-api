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
  });
});
