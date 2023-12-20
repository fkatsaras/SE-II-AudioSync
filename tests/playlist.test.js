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

test('POST /playlists/new - Create a new playlist', async (t) => {
    t.timeout(30000);

    // Set up test data
    const playlistData = {
        // Provide the necessary data for creating a playlist based on your schema
        // For example:
        name: 'My New Playlist',
        songs: ['Song1', 'Song2', 'Song3'],
    };

    // Make the POST request
    const response = await got.post(`${BASE_URL}/playlists/new`, {
        json: playlistData,
        responseType: 'json', // Automatically parse response as JSON
    });

    // Check the response status code
    t.is(response.statusCode, 201);


});