const request = require("supertest");
const server = require("../server/server");
const { generateToken } = require("../middleware/auth");

const user = {
    id: 1,
    username: "bob"
};

const token = generateToken(user);

describe("Pets Endpoint", () => {
    it("Requires an authorization token", async () => {
        const response = await request(server).get("/api/pet");
        expect(response.status).toBe(501);
    });

    it("Responds with status 200 OK", async () => {
        const response = await request(server)
            .get("/api/pet")
            .set("Authorization", token);

        expect(response.status).toBe(200);
    });

    it("Returns JSON", async () => {
        const response = await request(server)
            .get("/api/pet")
            .set("Authorization", token);
        expect(response.type).toBe("application/json");
    });

    it("Returns an array and not another data type", async () => {
        const response = await request(server)
            .get("/api/pet")
            .set("Authorization", token);

        expect(typeof response.body).toBe("object");
        expect(typeof response.body).not.toBe("string");
        expect(typeof response.body).not.toBe("number");
        expect(typeof response.body).not.toBe("boolean");
        expect(typeof response.body).not.toBe("null");
        expect(typeof response.body).not.toBe("undefined");
        expect(typeof response.body).not.toBe("function");

        expect(Array.isArray(response.body)).toBeTruthy();
    });
});
