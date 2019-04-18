exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("food_entry")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("food_entry").insert([
                {
                    id: 1,
                    name: "Chicken",
                    quantity: 1,
                    meal: "Dinner",
                    category: "Protein",
                    date_added: "2019-04-11T11:23:09.846Z",
                    date_update: "2019-04-11T11:23:09.846Z",
                    child_id: 1
                },
                {
                    id: 2,
                    name: "Porridge",
                    quantity: 1,
                    meal: "Breakfast",
                    category: "Carbs",
                    date_added: "2019-04-11T11:23:09.846Z",
                    date_update: "2019-04-11T11:23:09.846Z",
                    child_id: 1
                },
                {
                    id: 3,
                    name: "Broccoli",
                    quantity: 1,
                    meal: "Dinner",
                    category: "Vegetables",
                    date_added: "2019-04-11T11:23:09.846Z",
                    date_update: "2019-04-11T11:23:09.846Z",
                    child_id: 1
                },
                {
                    id: 4,
                    name: "Banana",
                    quantity: 1,
                    meal: "Breakfast",
                    category: "Fruit",
                    date_added: "2019-04-11T11:23:09.846Z",
                    date_update: "2019-04-11T11:23:09.846Z",
                    child_id: 1
                },
                {
                    id: 5,
                    name: "Chocolate",
                    quantity: 1,
                    meal: "Snack",
                    category: "Treats",
                    date_added: "2019-04-11T11:23:09.846Z",
                    date_update: "2019-04-11T11:23:09.846Z",
                    child_id: 1
                },
                {
                    id: 6,
                    name: "Strawberry Milkshake",
                    quantity: 1,
                    meal: "Lunch",
                    category: "Dairy",
                    date_added: "2019-04-11T11:23:09.846Z",
                    date_update: "2019-04-11T11:23:09.846Z",
                    child_id: 1
                }
            ]);
        });
};
