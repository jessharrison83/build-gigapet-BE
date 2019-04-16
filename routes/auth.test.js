const server = require("../server/server");
const request = require("supertest");
const db = require("../helpers/dbConfig");

describe("Register new user", () => {
    afterEach(async () => {
        await db("parents").truncate();
    });

    it("Returns a token for a new user", async () => {
        const res = await request(server)
            .post("/api/auth/register")
            .send({
                name: "Mark", // required
                email: "mark@markey.com", // required, must be unique
                username: "markymark", // required, must be unique
                password: "xxx", // required
                img_url: "", // not required
            });

        expect(res.status).toBe(201);
        expect(res.body.id).toBeTruthy();
        expect(res.body.token).toBeTruthy();
        expect(res.body.token.length).toBe(168);
    });
});
