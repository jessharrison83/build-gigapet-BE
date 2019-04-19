const server = require("../server/server");
const request = require("supertest");
const { generateToken } = require("../middleware/auth");

const db = require("../helpers/dbConfig");

const token = generateToken({
    id: 5,
    username: "Matt"
});

const authHeader = "Authorization";

async function truncate() {
    await db("parents").truncate();
    await db("pets").truncate();
    await db("children").truncate();
    await db("food_entry").truncate();
}

async function seed() {
    await db.seed.run();
}

describe("GET /child/:id/entries", () => {
    beforeEach(seed);

    afterEach(truncate);

    it("returns an array of entries for a given test", async () => {
        try {
            const res = await request(server)
                .get("/api/child/1/entries")
                .set(authHeader, token);

            expect(res.status).toBe(200);
            expect(Array.isArray(res));
        } catch (error) {
            console.log(error); //eslint-disable-line
        }
    });
});

describe("POST /child/:id/entries", () => {
    beforeEach(seed);

    afterEach(truncate);

    it("adds a food entry", async () => {
        try {
            const res = await request(server)
                .get("/api/child/1/entries")
                .set(authHeader, token)
                .send({
                    name: "Chicken",
                    quantity: 1,
                    meal: "Dinner",
                    category: "Protein",
                    date_added: "2019-04-11T11:23:09.846Z",
                    date_update: "2019-04-11T11:23:09.846Z",
                    child_id: 1
                });

            expect(res.status).toBe(200);
            expect(Array.isArray(res));
        } catch (error) {
            console.log(error); //eslint-disable-line
        }
    });
});
