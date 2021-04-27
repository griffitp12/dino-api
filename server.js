const express = require('express');
const knex = require('./db/knex')

const app = express();

app.use(express.json());

const setupServer = () => {
    // get all dinos
    app.get("/api/dinosaur_db", async (req, res) => {       
        const dinos = await knex.select().from('dinos')
        if (dinos) {
            res.json(dinos);
        } else {
            res.status(404, "no dinos file dude").end
        }
    })

    // get dino by name or id
    app.get("/api/dinosaur_db/:name", async (req, res) => {
        const { name } = req.params;
        const selectedDino = await knex.select().from('dinos').where({ name: name }).first();
        if (selectedDino) {
            res.json(selectedDino)
        } else {
            res.status(404).end()
        }
    })

    // add a dino
    app.post("/api/dinosaur_db/", async (req, res) => {
        const dinoName = req.body.name;
        try {
            console.log('trying')
            knex('dinos').insert({ name: dinoName });
            res.send(`${dinoName} added!`);
        }
        catch {
            res.status(404)
        }
    })
    // update dino data
    app.patch("/api/dinosaur_db/:name", async (req, res) => {
        const { name } = req.params;
        const { info } = req.body.name;
        const selectedDino = await knex.select().from('dinos').where({ name: name }).first();
        if (selectedDino) {
            /* res.json(selectedDino) */
        } else {
            res.status(404).end()
        }
    })
    // delete dino by name
    app.patch("/api/dinosaur_db/:name", async (req, res) => {
        const { name } = req.params;
        const selectedDino = await knex.select().from('dinos').where({ name: name }).first();
        if (selectedDino) {
            /* res.json(selectedDino) */
        } else {
            res.status(404).end()
        }
    })

    return app;
};

module.exports = { setupServer }