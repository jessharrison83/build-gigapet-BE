const request = require("supertest");
const routes = require("../server/server");
const { generateToken } = require("../middleware/auth");

const db = require("../helpers/dbConfig");

const token = generateToken({ 
    id: 5,
    username: "Matt"
});

const authHeader = "Authorization";

describe("parent endpoint", () => { 
    afterEach(async () => {
        await db("parents").truncate();
        await db("children").truncate();
    });

    it("returns status code 200", async () => {
        try {
            const res = await request(routes)
                .get("/api/parent/2")
                .set(authHeader, token);

            expect(res.type)
                .toBe("application/json"); 
            expect(res.status) 
                .toBe(200);
            expect(res.body)
                .toEqual({});
        } catch (error) {
            console.log(error); //eslint-disable-line
        }
    });
});

describe("add child to parent endpoint", () => {
    it("adds child to children table", async () => {
        try {
            const res = await request(routes)
                .post("/api/parent/1/child")
                .set(authHeader, token)
                .send({
                    "name": "Alfie",
                    "pet_name": "Alfatron",
                    "pet_level": 4,
                    "pet_id": 1
                });

            console.log(res.body);
        } catch (error) {
            console.log(error); //eslint-disable-line
        }
    });
});