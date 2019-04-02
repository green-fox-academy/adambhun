const test = require("tape");
const request = require("supertest");
const app = require("./routes");

test("w/ values", t => {
  request(app)
    .get("/yondu?distance=100&time=10")
    .expect("Content-Type", /json/)
    .expect(200)
    .expect({distance: 100, time: 10, speed: 10})
    .end(function(err, res) {
      t.error(err);
      t.end();
    });
});

test("w/ zeroes", t => {
  request(app)
    .get("/yondu?distance=0&time=0")
    .expect("Content-Type", /json/)
    .expect(400)
    .expect({error: "zero"})
    .end(function(err, res) {
      t.error(err);
      t.end();
    });
});
