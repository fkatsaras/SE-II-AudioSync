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



test('GET /users/{userId}/liked-playlists - Get liked playlists of a user', async (t) => {
    t.timeout(30000);

    // Set up test data
    const userId = 123;

    // Make the GET request
    const response = await got.get(`${BASE_URL}/users/${userId}/liked-playlists`);


    // Check the response status code
    t.is(response.statusCode, 200);

    // Add additional checks if needed
    // For example, check if the response body is an array of playlists
    // t.true(Array.isArray(response.body));
    // t.true(response.body.length > 0);
    // t.true(response.body[0].hasOwnProperty('playlistProperty'));
});


test('POST /users/{userId}/liked-playlists - Like a playlist', async (t) => {
    t.timeout(30000);

    // Set up test data
    const userId = 123;
    const playlistToLike = {
        // Include the playlist data to like
        // For example, { playlistProperty: 'value' }
    };

    // Make the POST request
    const response = await got.post(`${BASE_URL}/users/${userId}/liked-playlists`, {
        json: playlistToLike
    });


    // Check the response status code
    t.is(response.statusCode, 201);

    // Add additional checks if needed
    // For example, check if the playlist is successfully liked
});

test('DELETE /users/{userId}/liked-playlists - Unlike a playlist', async (t) => {
    t.timeout(30000);

    // Set up test data
    const userId = 123;
    const playlistIdToUnlike = 456;

    // Make the DELETE request
    const response = await got.delete(`${BASE_URL}/users/${userId}/liked-playlists?playlistId=${playlistIdToUnlike}`);

    // Check the response status code
    t.is(response.statusCode, 204);

    // Add additional checks if needed
    // For example, check if the playlist is successfully unliked
});


test('GET /users/{userId}/liked-songs - Get liked songs of a user', async (t) => {
    t.timeout(30000);

    // Set up test data
    const userId = 123;

    // Make the GET request
    const response = await got.get(`${BASE_URL}/users/${userId}/liked-songs`);


    // Check the response status code
    t.is(response.statusCode, 200);

    // Add additional checks if needed
    // For example, check if the response body is an array of songs
    // t.true(Array.isArray(response.body));
    // t.true(response.body.length > 0);
    // t.true(response.body[0].hasOwnProperty('songProperty'));
});


test('POST /users/{userId}/liked-songs - Like a song', async (t) => {
    t.timeout(30000);

    // Set up test data
    const userId = 123;
    const songToLike = {
        // Include the song data to like
        // For example, { songProperty: 'value' }
    };

    // Make the POST request
    const response = await got.post(`${BASE_URL}/users/${userId}/liked-songs`, {
        json: songToLike
    });


    // Check the response status code
    t.is(response.statusCode, 201);

    // Add additional checks if needed
    // For example, check if the song is successfully liked
});

test('DELETE /users/{userId}/liked-songs - Unlike a song', async (t) => {
    t.timeout(30000);

    // Set up test data
    const userId = 123;
    const songIdToUnlike = 456;

    // Make the DELETE request
    const response = await got.delete(`${BASE_URL}/users/${userId}/liked-songs?songId=${songIdToUnlike}`);

    // Check the response status code
    t.is(response.statusCode, 204);

    // Add additional checks if needed
    // For example, check if the song is successfully unliked
});

