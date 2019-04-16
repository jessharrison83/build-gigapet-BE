const server = require("../server/server");
const request = require("supertest");

describe("Child Endpoint", () => {
  it("Get endpoint should require authorization", async () => {
    const id = Math.random();
    const response = await request(server).get(`/api/child/${id}`);
    expect(response.status).toBe(401);
  });

  it("Put endpoint should require authorization", async () => {
    const id = Math.random();
    const response = await request(server)
      .put(`/api/child/${id}`)
      .send({ pet_name: "Bubbles" });
    expect(response.status).toBe(401);
  });

  it("Delete endpoint should require authorization", async () => {
    const id = Math.random();
    const response = await request(server).delete(`/api/child/${id}`);
    expect(response.status).toBe(401);
  });
});
