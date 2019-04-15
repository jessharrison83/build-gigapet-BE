exports.up = function(knex, Promise) {
    return knex.schema.createTable("food_entry", table => {
        table.increments();
        table.string("name").notNullable();
        table
            .float("quantity")
            .notNullable();
        table
            .string("meal")
            .notNullable();
        table.string("category").notNullable();
        table.timestamp("date_added").notNullable();
        table.timestamp("date_update").notNullable();
        table.integer("child_id").notNullable();
    });
};
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("food_entry");
};
  