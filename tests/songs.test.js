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

    console.log('Started server');

});

test.after.always((t) => {
    
    //Close server
    t.context.server.close();


});

test('should search for songs, artists, and playlists', async (t) => {
    const searchTerm = 'Test Query';
    const searchType = 'songs';  // Adjust the search type as needed
    t.timeout(30000);

    try {
        const response = await got.get(`${BASE_URL}/search`, {
            searchParams: {
                query: searchTerm,
                type: searchType,
            },
        });

        t.is(response.statusCode, 200, `Expected status code 200, but received ${response.statusCode}`);
        t.true(Array.isArray(response.body), 'Response body should be an array');

        response.body.forEach((item) => {
            t.true(
                item.hasOwnProperty('title') || item.hasOwnProperty('name') || item.hasOwnProperty('playlistName'),
                'Each item in the response should have a title, name, or playlistName property'
            );
        });
    } catch (error) {
        t.fail(`Request failed with error: ${error.message}`);
        t.log(error.response.body); // Log the response body for further investigation
    }
});

//Testing the GET response (first we POST a song as an artist)

test('POST /artists/{artistId}/songs/upload - Upload a song as an artist AND GET /songs', async (t) => {
    const artistId = 123; 
    const newSong = {
        id: 12,
        title: 'Test Song',
        artist: 'Test artist',
        duration: 'Test duration',
        genre: 'Test genre'
        
    };
    t.timeout(30000);

    try {
        // Upload a song as an artist
        const uploadResponse = await got.post(`${BASE_URL}/artists/${artistId}/songs/upload`, {
            json: newSong,
        });

        t.is(uploadResponse.statusCode, 201, 'Should respond with status code 200');
        const songId = uploadResponse.body.id;

        // Fetch details of the uploaded song
        const getResponse = await got.get(`${BASE_URL}/songs/${songId}`);

        console.log(getResponse.body);

        t.is(getResponse.statusCode, 200, 'Should respond with status code 200');
        t.is(getResponse.body.id, newSong.id);
        t.is(getResponse.body.title, newSong.title);
        t.is(getResponse.body.artist, newSong.artist); 
        t.is(getResponse.body.duration, newSong.duration);
    } catch (error) {
        
        t.log(error.response.body); // Log the response body for further investigation
        t.fail(`Request failed with error: ${error.message}`);
    }
});