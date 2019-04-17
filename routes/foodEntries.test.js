const server = require("../server/server");
const request = require("supertest");
const { generateToken } = require("../middleware/auth");

const token = generateToken({ 
    id: 5,
    username: "Matt"
});

const authHeader = "Authorization";

describe("GET /child/:id/entries", () => {
    it("returns an array of entries for a given test", async () => {
        const res = await request(server)
            .get("/api/child/1/entries")
            .set(authHeader, token);
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ 
            "carbs": [],
            "fruit": [],
            "protein": [],
            "vegetables": [],
            "diary": []
        });
    });
});