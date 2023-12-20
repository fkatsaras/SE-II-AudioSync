const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');

const app = require('../index.js');

const BASE_URL = 'http://localhost:8080';


test.before(async (t) => {

    console.log('Starting server');

    //Start server before running tests
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json'});
    t.timeout(5000); // 5 seconds timeout

    console.log('Started server');

});

test.after.always((t) => {
    
    //Close server
    t.context.server.close();


});

test('should search for songs, artists, and playlists', async (t) => {
    const searchTerm = 'Test Query';
    t.timeout(10000);
    // Send a GET request to the /search endpoint with a query parameter
    const response = await got.get(`${BASE_URL}/search`, {
        searchParams: { query: searchTerm },
    });

    // Add assertions based on the expected response for a search query
    t.is(response.statusCode, 200);
    t.true(Array.isArray(response.body));
    // You can add more specific assertions based on the expected response structure

    // Ensure that the response items match the expected schema (Song, Artist, or Playlist)
    response.body.forEach((item) => {
        t.true(
            item.hasOwnProperty('title') || item.hasOwnProperty('name') || item.hasOwnProperty('playlistName'),
            'Each item in the response should have a title, name, or playlistName property'
        );
        // Add more specific assertions based on the expected properties of each item
    });
});

test('should get details of a specific song', async (t) => {
    const newSong = {
        title: 'Test Song',
        artist: 'Test Artist',
        duration: 240,
    };
    t.timeout(10000);

    // Create a new song
    const createResponse = await got.post(`${BASE_URL}/songs`, {
        json: newSong,
    });
    const songId = createResponse.body.id;

    // Fetch details of the created song
    const getResponse = await got.get(`${BASE_URL}/songs/${songId}`); // Remove the leading slash from '/api/songs/{songId}'

    // Add assertions based on the expected response for a specific song
    t.is(getResponse.statusCode, 200, 'Should respond with status code 200');
    t.is(getResponse.body.id, songId);
    t.is(getResponse.body.title, newSong.title);
    t.is(getResponse.body.artist, newSong.artist);
    t.is(getResponse.body.duration, newSong.duration);
});



