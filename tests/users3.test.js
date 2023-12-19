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

test('GET /users/{userId}/history - Get listening history for a user', async (t) => {
    t.timeout(30000);

    // Set up test data
    const userId = 123;

    // Make the GET request
    const response = await got.get(`${BASE_URL}/users/${userId}/history`);


    // Check the response status code
    t.is(response.statusCode, 200);

    // Add additional checks if needed
    // For example, check if the response body is an array of songs
    // t.true(Array.isArray(response.body));
    // t.true(response.body.length > 0);
    // t.true(response.body[0].hasOwnProperty('songProperty'));
});

test('DELETE /users/{userId}/history - Delete listening history for a user', async (t) => {
    t.timeout(30000);

    // Set up test data
    const userId = 123;

    // Make the DELETE request
    const response = await got.delete(`${BASE_URL}/users/${userId}/history`);

    // Check the response status code
    t.is(response.statusCode, 204);

    // Add additional checks if needed
    // For example, check if the listening history is successfully deleted
});

test('GET /users/{userId}/recommended-songs - Get recommended songs for a user', async (t) => {
    t.timeout(30000);

    // Set up test data
    const userId = 123;

    // Make the GET request
    const response = await got.get(`${BASE_URL}/users/${userId}/recommended-songs`);

    // Check the response status code
    t.is(response.statusCode, 200);

    // Add additional checks if needed
    // For example, check if the response body is an array of recommended songs
    // t.true(Array.isArray(response.body));
    // t.true(response.body.length > 0);
    // t.true(response.body[0].hasOwnProperty('songProperty'));
});
