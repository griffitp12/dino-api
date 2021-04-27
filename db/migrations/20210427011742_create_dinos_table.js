const e = require("express");

exports.up = function(knex) {
  knex.schema.createTable("dinos", table => {
      table.increments();
      table.string("name").notNullable();
      table.string("eats");
      table.string("size");
      table.string("comments");
  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("dinos")
};
