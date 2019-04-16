const server = require("../server/server");
const request = require("supertest");
// const db = require("../helpers/dbConfig");

describe("Pets Endpoint", () => {
  // let token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJzdGV2ZSIsImlhdCI6MTU1NTM2MTE5MywiZXhwIjoxNTU1NDQ3NTkzfQ.eBQrBjCE_CZ4alZAsTx1WLemYLpZkPxHImoxqnhvOEU";

  // beforeEach(async () => {
  //   await db("parents").truncate();

  //   // const response = await request(server)
  //   //   .post("/api/auth/register")
  //   //   .send({
  //   //     name: "name",
  //   //     email: "email",
  //   //     username: "username",
  //   //     password: "password"
  //   //   });

  //   // token = response.body.token;
  //   // console.log(response.body);
  // });

  // afterEach(async () => {
  //   await db("parents").truncate();
  // });

  it("Should require authorization", async () => {
    const response = await request(server).get("/api/pet");
    expect(response.status).toBe(401);
    expect(response.type).toBe("application/json");
  });
});
