const express = require('express');
const knex = require('./knex')

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
    app.get("/api/dinosaur_db/:nameOrId", async (req, res) => {
        const { nameOrId } = req.params;
        if (parseInt(nameOrId)) {
            const selectedDino = await knex.select().from('dinos').where({ id: nameOrId }).first();
            if (selectedDino) {
                res.json(selectedDino)
            } else {
                res.status(404).end()
            }
        } else {
            const selectedDino = await knex.select().from('dinos').where({ name: nameOrId }).first();
            if (selectedDino) {
                res.json(selectedDino)
            } else {
                res.status(404).end()
            }
        }
    });

    return app;
}

module.exports = { setupServer }