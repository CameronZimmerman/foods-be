const request = require("supertest");
const setup = require("../lib/utils/setup.js");
const app = require("../lib/app.js");

describe("crud routes", () => {
  beforeAll(() => {
    return setup();
  });

  test("should create a food and respond with it's contents", async () => {
    const res = await request(app)
      .post("/api/foods")
      .send({ name: "bagel", tastiness: 100 });
    expect(res.body).toEqual({
      id: "1",
      name: "bagel",
      tastiness: 100,
    });
  });

  test("should get a food by id", async () => {
    const res = await request(app).get("/api/foods/1");
    expect(res.body).toEqual({
      id: "1",
      name: "bagel",
      tastiness: 100,
    });
  });
});
