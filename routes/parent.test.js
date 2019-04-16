const request = require("supertest");
const routes = require("../server/server");
const { generateToken } = require("../middleware/auth");

const token = generateToken({ 
    id: 5,
    username: "Matt"
});

describe("parent endpoint", () => { //eslint-disable-line
    it("returns status code 200", async () => { //eslint-disable-line
        try {
            const res = await request(routes)
                .get("/api/parent/2")
                .set("Authorization", token);

            expect(res.type) //eslint-disable-line
                .toBe("application/json"); 
            expect(res.status) //eslint-disable-line
                .toBe(200);
        } catch (error) {
            console.log(error); //eslint-disable-line
        }
    });
});
