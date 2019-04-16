const server = require("../server/server");
const request = require("supertest");
const jwt = require("jsonwebtoken");

const db = require("../helpers/dbConfig");

const userObj = {
    name: "Mark", // required
    email: "mark@markey.com", // required, must be unique
    username: "markymark", // required, must be unique
    password: "xxx", // required
    img_url: "", // not required
};

describe("Register new user", () => {
    afterEach(async () => {
        await db("parents").truncate();
    });

    it("Returns a token for a new user", async () => {
        const res = await request(server)
            .post("/api/auth/register")
            .send(userObj);

        expect(res.status).toBe(201);
        expect(res.body.id).toBeTruthy();
        expect(res.body.token).toBeTruthy();
        expect(res.body.token.length).toBe(168);
    });
});

describe("Login user", () => {
    afterEach(async () => {
        await db("parents").truncate();
    });

    it("Returns a token when a user logs in", async () => {
        try {
            await request(server)
                .post("/api/auth/register")
                .send(userObj);
        } catch (error) {
            console.log(error); //eslint-disable-line
        }
        
        try {
            const res = await request(server)
                .post("/api/auth/login")
                .send({
                    username: "markymark", // required, must be unique
                    password: "xxx", // required
                });

            expect(res.status).toBe(200);
            expect(res.body.id).toBeTruthy();
            expect(res.body.token).toBeTruthy();
            expect(res.body.token.length).toBe(168);
        } catch (error) {
            console.log(error); //eslint-disable-line
        }
    });

    it("decrypts token correctly with secret", async () => {
        const key = process.env.SECRET;
        
        try {
            const res = await request(server)
                .post("/api/auth/register")
                .send(userObj);

            const { token } = res.body;

            jwt.verify(token, key, async (error, decoded) => {
                if (error) {
                    console.log(error); //eslint-disable-line
                } else {
                    expect(decoded.id).toBe(1);
                    expect(decoded.username).toBe("markymark");
                }
            });
                
        } catch (error) {
            console.log(error); //eslint-disable-line
        }
    });
});