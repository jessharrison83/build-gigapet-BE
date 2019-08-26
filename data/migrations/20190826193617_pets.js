exports.up = function(knex, Promise) {
    return knex.schema.createTable("pets", table => {
        table.increments();
        table.string("species").notNullable();
        table.string("description").notNullable();
        table.string("happy").notNullable();
        table.string("ok").notNullable();
        table.string("sad").notNullable();
        table.string("sick").notNullable();
        table.string("eating").notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("pets");
};
