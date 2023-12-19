const http = require("http");
const test = require("ava");
const listen = require("test-listen");
const got = require("got");

const app = require("../index.js");

const BASE_URL = process.env.API_BASE_URL || "http://localhost:8080";

test.before(async (t) => {
  // Start server before running tests
  t.context.server = http.createServer(app);
  t.context.prefixUrl = await listen(t.context.server);
  t.context.got = got.extend({
    prefixUrl: t.context.prefixUrl,
    responseType: "json",
  });
});

test.after.always((t) => {
  // Close server
  t.context.server.close();
});

test.serial("Playlist Endpoint Tests", (t) => {
  t.timeout(30000);

  test("POST /playlists/new - Create a new playlist", async (t) => {
    // Set up test data
    const playlistData = { 
        title:'Lo-Fi', 
        description: 'LoFi music for study'
    };

    // Make the POST request
    const response = await t.context.got.post("playlists/new", {
      json: playlistData,
    });

    // Check the response status code
    t.is(response.statusCode, 201);
  });

  test("GET /playlists/{playlistId}/songs - Get songs in a playlist", async (t) => {
    // Set up test data
    const playlistId = 123;

    // Make the GET request
    const response = await t.context.got.get(`playlists/${playlistId}/songs`);

    // Check the response status code
    t.is(response.statusCode, 200);
  });

  test("POST /playlists/{playlistId}/songs - Add a song to a playlist", async (t) => {
    // Set up test data
    const playlistId = 123;
    const songData = {
        title: 'Hush', 
        duration: 240, 
        genre: 'Rock'
      // Include song data here
      // For example, { title: 'Song Title', duration: 240, genre: 'Rock' }
    };

    // Make the POST request
    const response = await t.context.got.post(`playlists/${playlistId}/songs`, {
      json: songData,
    });

    // Check the response status code
    t.is(response.statusCode, 201);
  });

  test("DELETE /playlists/{playlistId}/songs - Remove a song from a playlist", async (t) => {
    // Set up test data
    const playlistId = 123;
    const songId = 456;

    // Make the DELETE request
    const response = await t.context.got.delete(
      `playlists/${playlistId}/songs?songId=${songId}`
    );

    // Check the response status code
    t.is(response.statusCode, 204);
  });

  test("GET /playlists/{playlistId} - Get details of a playlist", async (t) => {
    // Set up test data
    const playlistId = 123;

    // Make the GET request
    const response = await t.context.got.get(`playlists/${playlistId}`);

    // Check the response status code
    t.is(response.statusCode, 200);
  });

  test("PUT /playlists/{playlistId} - Update playlist details", async (t) => {
    // Set up test data
    const playlistId = 123;
    const playlistUpdateData = {
        title: 'Updated Playlist Title', 
        description: 'Updated playlist description'
    };

    // Make the PUT request
    const response = await t.context.got.put(`playlists/${playlistId}`, {
      json: playlistUpdateData,
    });

    // Check the response status code
    t.is(response.statusCode, 200);
  });

  test("DELETE /playlists/{playlistId} - Delete a playlist", async (t) => {
    // Set up test data
    const playlistId = 123;

    // Make the DELETE request
    const response = await t.context.got.delete(`playlists/${playlistId}`);

    // Check the response status code
    t.is(response.statusCode, 204);
  });

  // Add more tests for other playlist endpoints
});

// Add cleanup steps if necessary
test.after.always(async (t) => {
  // Clean up resources or database records created during tests
});
