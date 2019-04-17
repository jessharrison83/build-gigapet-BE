exports.up = function(knex, Promise) {
  return knex.schema.createTable("parentsChildren", table => {
    table.increments();
    table
      .integer("child_id")
      .unsigned()
      .references("id")
      .inTable("children")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("parent_id")
      .unsigned()
      .references("id")
      .inTable("parents")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("parentsChildren");
};
