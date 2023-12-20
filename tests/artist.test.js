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

test('Get songs by a specific artist', async (t) => {
    // Define the artist ID for testing
    const artistId = 123; // Replace with a valid artist ID from your system

    // Send a GET request to the endpoint
    const response = await got.get(`${BASE_URL}/artists/${artistId}/songs`, {
        responseType: 'json',
    });

    // Assert the response status code
    t.is(response.statusCode, 200, 'Expected status code 200');

    // Assert the presence of songs in the response body
    t.truthy(response.body.songs, 'Expected songs in the response body');

    // Additional assertions based on your application's response structure
    // For example, you might want to check the format of the response, the number of songs, etc.
    t.true(Array.isArray(response.body.songs), 'Songs should be an array');
});

test('Get songs by a non-existent artist', async (t) => {
    // Define a non-existent artist ID for testing
    const nonExistentArtistId = 999; // Replace with a non-existent artist ID

    // Send a GET request to the endpoint with a non-existent artist ID
    const response = await got.get(`${BASE_URL}/artists/${nonExistentArtistId}/songs`, {
        responseType: 'json',
    });

    // Assert the response status code for a non-existent artist
    t.is(response.statusCode, 404, 'Expected status code 404');

    // Assert the specific error message or structure in the response body
    t.is(response.body.error, 'Artist or songs not found', 'Expected error message for non-existent artist');
});
// Test case for GET /artists
test('Get a list of artists on the platform', async (t) => {
    // Send a GET request to the endpoint
    const response = await got.get(`${BASE_URL}/artists`, {
        responseType: 'json',
    });

    // Assert the response status code
    t.is(response.statusCode, 200, 'Expected status code 200');

    // Assert the response body is an array of artists
    t.true(Array.isArray(response.body), 'Expected an array of artists');
});

// Test case for POST /artists
test('Create a new artist', async (t) => {
    // Define the artist data for testing
    const newArtist = {
        // Replace with valid artist data according to your schema
        name: 'New Artist',
        genre: 'Pop',
        // Add other required fields as needed
    };

    // Send a POST request to the endpoint with the new artist data
    const response = await got.post(`${BASE_URL}/artists`, {
        json: newArtist,
        responseType: 'json',
    });

    // Assert the response status code for successful creation
    t.is(response.statusCode, 201, 'Expected status code 201');

    // Assert the response body is the created artist
    t.deepEqual(response.body, newArtist, 'Expected the created artist in the response body');
});

// Test case for POST /artists with invalid input
test('Attempt to create a new artist with invalid input', async (t) => {
    // Send a POST request to the endpoint with invalid artist data
    const invalidArtist = {
        // Replace with invalid artist data or omit required fields
    };

    // Send a POST request to the endpoint with invalid artist data
    const response = await got.post(`${BASE_URL}/artists`, {
        json: invalidArtist,
        responseType: 'json',
    });

    // Assert the response status code for a bad request
    t.is(response.statusCode, 400, 'Expected status code 400');

    // Assert the specific error message or structure in the response body
    t.truthy(response.body.error, 'Expected error message for bad request');
});
// Test case for GET /artists/{artistId}/albums
test('Get albums of a specific artist', async (t) => {
    // Define a valid artist ID for testing
    const validArtistId = 123; // Replace with a valid artist ID from your system

    // Send a GET request to the endpoint with the valid artist ID
    const response = await got.get(`${BASE_URL}/artists/${validArtistId}/albums`, {
        responseType: 'json',
    });

    // Assert the response status code
    t.is(response.statusCode, 200, 'Expected status code 200');

    // Assert the response body is an array of playlists (albums)
    t.true(Array.isArray(response.body), 'Expected an array of playlists (albums)');
});

// Test case for GET /artists/{artistId}/albums with non-existent artist ID
test('Attempt to get albums of a non-existent artist', async (t) => {
    // Define a non-existent artist ID for testing
    const nonExistentArtistId = 999; // Replace with a non-existent artist ID

    // Send a GET request to the endpoint with the non-existent artist ID
    const response = await got.get(`${BASE_URL}/artists/${nonExistentArtistId}/albums`, {
        responseType: 'json',
    });

    // Assert the response status code for a non-existent artist
    t.is(response.statusCode, 404, 'Expected status code 404');

    // Assert the specific error message or structure in the response body
    t.truthy(response.body.error, 'Expected error message for artist not found or no albums available');
});

// Test case for GET /artists/{artistId}
test('Get details of an artist', async (t) => {
    // Define a valid artist ID for testing
    const validArtistId = 123; // Replace with a valid artist ID from your system

    // Send a GET request to the endpoint with the valid artist ID
    const response = await got.get(`${BASE_URL}/artists/${validArtistId}`, {
        responseType: 'json',
    });

    // Assert the response status code
    t.is(response.statusCode, 200, 'Expected status code 200');

    // Assert the response body contains artist details
    t.truthy(response.body.name, 'Expected artist name in the response body');
});

// Test case for GET /artists/{artistId} with non-existent artist ID
test('Attempt to get details of a non-existent artist', async (t) => {
    // Define a non-existent artist ID for testing
    const nonExistentArtistId = 999; // Replace with a non-existent artist ID

    // Send a GET request to the endpoint with the non-existent artist ID
    const response = await got.get(`${BASE_URL}/artists/${nonExistentArtistId}`, {
        responseType: 'json',
    });

    // Assert the response status code for a non-existent artist
    t.is(response.statusCode, 404, 'Expected status code 404');

    // Assert the specific error message or structure in the response body
    t.truthy(response.body.error, 'Expected error message for artist not found');
});

// Test case for PUT /artists/{artistId}
test('Update artist details', async (t) => {
    // Define a valid artist ID for testing
    const validArtistId = 123; // Replace with a valid artist ID from your system

    // Define the updated artist details
    const updatedArtistDetails = {
        // Replace with the updated artist details according to your schema
        name: 'Updated Artist Name',
        // Add other fields as needed
    };

    // Send a PUT request to the endpoint with the valid artist ID and updated details
    const response = await got.put(`${BASE_URL}/artists/${validArtistId}`, {
        json: updatedArtistDetails,
        responseType: 'json',
    });

    // Assert the response status code for successful update
    t.is(response.statusCode, 200, 'Expected status code 200');

    // Assert the response body is the updated artist details
    t.deepEqual(response.body, updatedArtistDetails, 'Expected the updated artist details in the response body');
});

// Test case for PUT /artists/{artistId} with invalid ownership
test('Attempt to update artist details with invalid ownership', async (t) => {
    // Define a valid artist ID for testing
    const validArtistId = 123; // Replace with a valid artist ID from your system

    // Define the updated artist details
    const updatedArtistDetails = {
        // Replace with the updated artist details according to your schema
        name: 'Updated Artist Name',
        // Add other fields as needed
    };

    // Send a PUT request to the endpoint with the valid artist ID and updated details
    const response = await got.put(`${BASE_URL}/artists/${validArtistId}`, {
        json: updatedArtistDetails,
        responseType: 'json',
        headers: {
            Authorization: 'Bearer INVALID_TOKEN', // Provide an invalid token for testing unauthorized access
        },
    });

    // Assert the response status code for forbidden access
    t.is(response.statusCode, 403, 'Expected status code 403');

    // Assert the specific error message or structure in the response body
    t.truthy(response.body.error, 'Expected error message for forbidden access');
});

// Test case for PUT /artists/{artistId} with non-existent artist ID
test('Attempt to update details of a non-existent artist', async (t) => {
    // Define a non-existent artist ID for testing
    const nonExistentArtistId = 999; // Replace with a non-existent artist ID

    // Define the updated artist details
    const updatedArtistDetails = {
        // Replace with the updated artist details according to your schema
        name: 'Updated Artist Name',
        // Add other fields as needed
    };

    // Send a PUT request to the endpoint with the non-existent artist ID and updated details
    const response = await got.put(`${BASE_URL}/artists/${nonExistentArtistId}`, {
        json: updatedArtistDetails,
        responseType: 'json',
    });

    // Assert the response status code for a non-existent artist
    t.is(response.statusCode, 404, 'Expected status code 404');

    // Assert the specific error message or structure in the response body
    t.truthy(response.body.error, 'Expected error message for artist not found');
});
