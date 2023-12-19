const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');

const app = require('../index.js');

const BASE_URL = 'http://localhost:8080';

const { usersUserIdGET } = require('../service/DefaultService.js');



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


test('GET user by function', async t => {

    t.timeout(10000);
    

    // Set up test data
    const userId = 123;
    const expectedUser = {

      
      id: 0,
      email: 'email',
      username: 'username',
    };

    const response = await usersUserIdGET(userId);
  
    t.deepEqual(response, expectedUser);
});


test('GET /users/{userId} - Get details of a user', async (t) => {

    t.timeout(30000);


    // Set up test data
    const userId = 123;
    const expectedUser = {

        id : 0,
        email : 'email',
        username : 'username'
      };
  
    // Make the GET request
   
    const response = await got.get(`${BASE_URL}/users/${userId}`);
  
    // Check the response status code
    t.is(response.statusCode, 200);
  
    // Check each component individually
    // t.is(response.body.id, expectedUser.id);
    // t.is(response.body.email, expectedUser.email);
    // t.is(response.body.username, expectedUser.username);
  });

  test('PUT /users/{userId} - Update user details', async (t) => {
    t.timeout(30000);

    // Set up test data
    const userId = 123;
    const updatedUserData = {
        // Include the updated user data here
        email: 'newemail@example.com',
        username: 'newusername'
    };

    // Make the PUT request
    const response = await got.put(`${BASE_URL}/users/${userId}`, {
        json: updatedUserData
    });


    // Check the response status code
    t.is(response.statusCode, 200);

});

test('DELETE /users/{userId} - Delete a specific user', async (t) => {
    t.timeout(30000);

    // Set up test data
    const userId = 123;

    // Make the DELETE request
    const response = await got.delete(`${BASE_URL}/users/${userId}`);

    // Check the response status code
    t.is(response.statusCode, 204);

    // Add additional checks if needed
    // For example, check if the user is deleted and no longer exists
});

test('GET /users/{userId}/preferences - Get user preferences', async (t) => {
    t.timeout(30000);

    // Set up test data
    const userId = 123;

    // Make the GET request
    const response = await got.get(`${BASE_URL}/users/${userId}/preferences`);


    // Check the response status code
    t.is(response.statusCode, 200);

    // Add additional checks if needed
    // For example, check if the response body matches the UserPreferences schema
    // t.deepEqual(response.body, expectedUserPreferences);
});

test('PUT /users/{userId}/preferences - Update user preferences', async (t) => {
    t.timeout(30000);

    // Set up test data
    const userId = 123;
    const updatedUserPreferences = {
        // Include the updated user preferences here
        // For example, { theme: 'dark', language: 'en' }
    };

    // Make the PUT request
    const response = await got.put(`${BASE_URL}/users/${userId}/preferences`, {
        json: updatedUserPreferences
    });


    // Check the response status code
    t.is(response.statusCode, 200);

});
