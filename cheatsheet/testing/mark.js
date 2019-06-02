var test = require('tape');
const request = require('supertest');
const app = require('./app');

let a = 'a';

test('a test', function (t) {
    request(app)
        .get('/')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .end(function (err, res) {
            if (err) throw err;
            t.true(true);
            t.deepEqual({ hello: 'Adele' }, res.body)
        });
    t.end();
});

class Apple {
    a = 'a';
    two() {
        return 2;
    }
}

test('a test', function (t) {
    t.equal('a', a);
    t.end();
});

test('a test', function (t) {
    let apple = new Apple();
    t.equal('a', apple.a);
    t.end();
});


test('2 is 2', function (t) {
    let apple = new Apple();
    t.equal(2, apple.two());
    t.end();
});