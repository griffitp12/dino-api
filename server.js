const express = require('express');
const knex = require('./knex')

const app = express();

app.use(express.json());


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
        res.json(await knex.select().where({id: nameOrId}))
    } else {
        console.log("name is:", nameOrId)
        res.json(await knex.select().where({name: nameOrId}))
    }
}

const port = 9999 || process.env.DB_PORT;
app.listen(9999, () => {
    console.log(`Server running at https://localhost:${port}`)
})