const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');

const app = require('../index.js');

const BASE_URL = 'http://localhost:8080';

// POST request to /playlists/new: Successful creation of a new playlist
test('User can create a new playlist', async (t) => {
    // Assume there is a valid user session token from a successful login
    const sessionToken = 'validSessionToken';

    // Playlist data to be created
    const newPlaylistData = {
        name: 'My Playlist',
        description: 'A playlist created for testing purposes',
        tracks: ['track1', 'track2', 'track3'],
    };

    // Send a POST request to the /playlists/new endpoint with the new playlist data
    const response = await t.context.got.post('/playlists/new', {
        headers: {
            Authorization: `Bearer ${sessionToken}`,
        },
        json: newPlaylistData,
        responseType: 'json',
    });

    // Assert response status code is 201 and check if the playlist is created successfully
    t.is(response.statusCode, 201);
    t.truthy(response.body.playlistId);
    t.is(response.body.name, newPlaylistData.name);
    t.is(response.body.description, newPlaylistData.description);
    t.deepEqual(response.body.tracks, newPlaylistData.tracks);
});

// POST request to /playlists/new without a valid session token
test('User receives 401 when trying to create a new playlist without a valid session', async (t) => {
    // Playlist data to be created
    const newPlaylistData = {
        name: 'My Playlist',
        description: 'A playlist created for testing purposes',
        tracks: ['track1', 'track2', 'track3'],
    };

    // Send a POST request to the /playlists/new endpoint without a valid session token
    const response = await t.context.got.post('/playlists/new', {
        json: newPlaylistData,
        responseType: 'json',
        throwHttpErrors: false,
    });

    // Assert response status code is 401
    t.is(response.statusCode, 401);
});