const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');

const app = require('../index.js');

const BASE_URL = 'http://localhost:8080';


test.before(async (t) => {

    //Start server before running tests
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json'});

});

test.after.always((t) => {
    
    //Close server
    t.context.server.close();

});

//User history endpoint  test

test('Get listening history for a user - Success', async (t) => {
    // Valid user id
    const userId = 123;

    console.log("Before request");
    const {body, statusCode} = await t.context.got(`${BASE_URL}/users/${userId}/history`);
    

    t.is(statusCode, 200);
    
});