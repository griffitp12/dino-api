const express = require('express');
const knex = require('./knex')

const app = express();

app.use(express.json());

const setupServer = () => {
    // get all dinos
    app.get("/api/dinosaur_db", async (_, res) => {
        const dinos = await knex.select().from('dinos')
        if (dinos) {
            res.json(dinos);
        } else {
            res.status(404, "no dinos file dude").end
        }
    })

    // get dino by name or id
    app.get("/api/dinosaur_db:nameOrId"), async (req, res) => {
        const { nameOrId } = req.params;
        if (parseInt(nameOrId)) {
            console.log("id:", nameOrId)
            res.json(await knex.select().where({ id: nameOrId }))
        } else {
            console.log("name is:", nameOrId)
            res.json(await knex.select().where({ name: nameOrId }))
        }
    }

    return app;
}

module.exports = { setupServer }