const e = require("express");

exports.up = async function(knex) {
  return knex.schema.createTable("dinos", table => {
      table.increments();
      table.string("name").notNullable();
      table.string("eats");
      table.string("size");
      table.string("comments");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("dinos")
};
