const server = require("../server/server");
const request = require("supertest");
const { generateToken } = require("../middleware/auth");
const db = require("../helpers/dbConfig");

const parent = {
  id: 1,
  username: "bob"
};

const child = {
  id: 1,
  name: "Alfie",
  pet_name: "Coco"
};

const token = generateToken(parent);

describe("Child Endpoint", () => {
  beforeEach(async () => {
    await db("children").truncate();
  });
  afterEach(async () => {
    await db("children").truncate();
  });

  describe("Get child by id", () => {
    it("Requires an authorization token", async () => {
      const id = Math.random();
      const response = await request(server).get(`/api/child/${id}`);
      expect(response.status).toBe(501);
    });

    it("Responds with a child object", async () => {
      const response = await request(server)
        .get(`/api/child/${child.id}`)
        .set("Authorization", token);

      expect(response.status).toBe(200);
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
  });

  describe("Delete child", () => {
    it("Requires an authorization token", async () => {
      const id = Math.random();
      const response = await request(server).delete(`/api/child/${id}`);
      expect(response.status).toBe(501);
    });
  });
});
