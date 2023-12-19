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



test('POST /artist/{artistId}/following - Follow an artist', async (t) => {
    t.timeout(30000);

    // Set up test data
    const artistId = 789;
    const userId = 123;

    // Make the POST request
    const response = await got.post(`${BASE_URL}/artist/${artistId}/following?userId=${userId}`);

    console.log(response.body);

    // Check the response status code
    t.is(response.statusCode, 200);

    // Add additional checks if needed
    // For example, check if the user started following the artist
});

test('DELETE /artist/{artistId}/following - Unfollow an artist', async (t) => {
    t.timeout(30000);

    // Set up test data
    const artistId = 789;
    const userId = 123;

    // Make the DELETE request
    const response = await got.delete(`${BASE_URL}/artist/${artistId}/following?userId=${userId}`);

    // Check the response status code
    t.is(response.statusCode, 204);

    // Add additional checks if needed
    // For example, check if the user unfollowed the artist
});


test('POST /artists/{artistId}/albums/upload - Create and upload an album as an artist', async (t) => {
    t.timeout(30000);

    // Set up test data
    const artistId = 789;
    const albumData = {
        // Include the album data here
        // For example, { title: 'Album Title', tracks: [...] }
    };

    // Make the POST request
    const response = await got.post(`${BASE_URL}/artists/${artistId}/albums/upload`, {
        json: albumData
    });

    console.log(response.body);

    // Check the response status code
    t.is(response.statusCode, 201);

    // Add additional checks if needed
    // For example, check if the album is successfully created and uploaded by the artist
});

test('POST /artists/{artistId}/songs/upload - Upload a song as an artist', async (t) => {
    t.timeout(30000);

    // Set up test data
    const artistId = 789;
    const songData = {
        // Include the song data here
        // For example, { title: 'Song Title', duration: 240, genre: 'Rock' }
    };

    // Make the POST request
    const response = await got.post(`${BASE_URL}/artists/${artistId}/songs/upload`, {
        json: songData
    });

    console.log(response.body);

    // Check the response status code
    t.is(response.statusCode, 201);

    // Add additional checks if needed
    // For example, check if the song is successfully uploaded by the artist
});
