const server = require("../server/server");
const request = require("supertest");
const { generateToken } = require("../middleware/auth");
const db = require("../helpers/dbConfig");

const parent = {
    username: "bob",
    password: "bob",
    email: "bob@gmail.com",
    name: "Bob"
};

const child = {
    name: "Alfie",
    pet_name: "Coco",
    pet_experience: 50,
    pet_id: 1
};

const token = generateToken(parent);

describe("Child Endpoint", () => {
    beforeEach(async () => {
        await db.seed.run();
    });

    afterEach(async () => {
        await db("parents").truncate();
        await db("pets").truncate();
        await db("children").truncate();
    });

    describe("Get child by id", () => {
        it("Requires an authorization token", async () => {
            const id = Math.random();
            const response = await request(server).get(`/api/child/${id}`);
            expect(response.status).toBe(501);
        });

        it("Responds with a status 200 and a child object", async () => {
            const newParent = await request(server)
                .post("/api/auth/register")
                .send(parent);

            const token = newParent.body.token;

            const addChild = await request(server)
                .post(`/api/parent/${newParent.body.id}/child`)
                .set("Authorization", token)
                .send(child);

            expect(addChild.status).toBe(201);
            const newChild = JSON.parse(addChild.text);

            const response = await request(server)
                .get(`/api/child/${newChild.id}`)
                .set("Authorization", token);

            expect(response.type).toBe("application/json");
            expect(response.status).toBe(200);
            expect(typeof response.body).toBe("object");
        });
    });

    describe("Update child", () => {
        it("Requires an authorization token", async () => {
            const id = Math.random();
            const response = await request(server)
                .put(`/api/child/${id}`)
                .send({ pet_name: "Bubbles" });
            expect(response.status).toBe(501);
        });

        it("Updates child and returns 200 OK with a child object", async () => {
            const newParent = await request(server)
                .post("/api/auth/register")
                .send(parent);

            const token = newParent.body.token;

            const addChild = await request(server)
                .post(`/api/parent/${newParent.body.id}/child`)
                .set("Authorization", token)
                .send(child);

            expect(addChild.status).toBe(201);
            const newChild = JSON.parse(addChild.text);
            const body = { pet_name: "Bubbles" };

            const response = await request(server)
                .put(`/api/child/${newChild.id}`)
                .set("Authorization", token)
                .send(body);

            expect(response.status).toBe(200);
            expect(typeof response.body).toBe("object");
        });
    });

    describe("Delete child", () => {
        it("Requires an authorization token", async () => {
            const id = Math.random();
            const response = await request(server).delete(`/api/child/${id}`);
            expect(response.status).toBe(501);
        });

        it("Deletes child and responds with 200 OK", async () => {
            const newParent = await request(server)
                .post("/api/auth/register")
                .send(parent);

            const token = newParent.body.token;

            const addChild = await request(server)
                .post(`/api/parent/${newParent.body.id}/child`)
                .set("Authorization", token)
                .send(child);

            expect(addChild.status).toBe(201);
            const newChild = JSON.parse(addChild.text);

            const response = await request(server)
                .delete(`/api/child/${newChild.id}`)
                .set("Authorization", token);

            const message = {
                message: `The child with ID ${
                    newChild.id
                } was successfully deleted`
            };

            expect(response.status).toBe(200);
            expect(response.body).toEqual(message);
        });
    });
});
