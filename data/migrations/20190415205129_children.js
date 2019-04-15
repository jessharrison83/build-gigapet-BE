exports.up = function(knex, Promise) {
  return knex.schema.createTable("children", table => {
    table.increments();
    table.string("name").notNullable();
    table.string("pet_name").notNullable();
    table.integer("pet_level");
    table
      .integer("pet_id")
      .unsigned()
      .references("id")
      .inTable("pets")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("children");
};
