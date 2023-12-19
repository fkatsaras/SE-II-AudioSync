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

    console.log(response);
  
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

    console.log(response.body);

  
    // Check the response status code
    t.is(response.statusCode, 200);
  
    // Check each component individually
    t.is(response.body.id, expectedUser.id);
    t.is(response.body.email, expectedUser.email);
    t.is(response.body.username, expectedUser.username);
  });