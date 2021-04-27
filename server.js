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
            res.sendStatus(404).end
        }
    })

    // get dino by name or id
    app.get("/api/dinosaur_db/:name", async (req, res) => {
        const { name } = req.params;
        const selectedDino = await knex.select().from('dinos').where({ name: name }).first();
        if (selectedDino) {
            res.json(selectedDino)
        } else {
            res.sendStatus(404).end()
        }
    })

    // add a dino
    app.post("/api/dinosaur_db/", async (req, res) => {
        const dinoName = req.body.name;
        await knex('dinos').insert({ name: dinoName })
        res.json(`${dinoName} added!`)
    })
    
    // update dino data
    app.patch("/api/dinosaur_db/:name", async (req, res) => {
        const { name } = req.params;
        const newData = req.body;
        const selectedDino = await knex('dinos').where({ name: name }).update(newData);
        if (selectedDino) {
            res.json(selectedDino).end()
        } else {
            res.status(404).send(`${selectedDino} didn't exist!`).end()
        }
    })
    // delete dino by name
    app.delete("/api/dinosaur_db/:name", async (req, res) => {
        const { name } = req.params;
        await knex('dinos').where({ name: name }).del()
        res.json(`${name} extinct!`)
    })

    return app;
};

module.exports = { setupServer }