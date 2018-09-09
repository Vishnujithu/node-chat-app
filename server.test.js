const request = require('supertest');
var app = require('./server.js').app;
const expect = require('expect');

it('testing the HTTP response', (done) => {
    request(app)
    .get('/')
    .expect(200)
    .expect((res) => {
        expect(res.body).toInclude({name : 'Hello world'})
    })
    .end(done)
});