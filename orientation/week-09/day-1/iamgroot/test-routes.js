const test = require("tape");
const request = require("supertest");
const app = require("./routes");

test("w/ msg", t => {
  request(app)
    .get("/groot?message=something")
    .expect("Content-Type", /json/)
    .expect(200)
    .expect({ received: "message", translated: "I am Groot!" })
    .end(function(err, res) {
      t.error(err);
      t.end();
    });
});

test("wo msg", t => {
  request(app)
    .get("/groot")
    .expect("Content-Type", /json/)
    .expect(400)
    .expect({ error: "I am Groot!" })
    .end(function(err, res) {
      t.error(err); 
      t.end();
    });
});