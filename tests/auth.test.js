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
    t.timeout(5000); // 5 seconds timeout


});

test.after.always((t) => {
    
    //Close server
    t.context.server.close();


});


//Succesful login
test('User login - Successful login', async (t) => {
    // Define the user credentials
    const loginCredentials = {
        username: 'validUsername',
        password: 'validPassword',
    };

    // Send a POST request to the login endpoint
    const response = await got.post(`${BASE_URL}/login`, {
        json: loginCredentials,
        responseType: 'json',
    });

    // Assert the response status code 
    //Response doesnt have a body though
    t.is(response.statusCode, 200, 'Expected status code 200');
    
});


//Unsuccesful login
test('User receives 401 for incorrect credentials during login', async (t) => {

    const loginCredentials = {
        username: 'invalid-username',
        password: 'invalid-password',
    };

    //Send a POST response th the /login endpoint
    const response = await got.post(`${BASE_URL}/login`, {

        json: loginCredentials,
        responseType: 'json',
    });

    // Assert response status code
    t.is(response.statusCode, 401);

});

//POST request to /register: Successful registration
test('User successful;y registers with valid information', async (t) => {

    const registerCredentials = {
        username: 'new-username',
        email: 'new-email@emaple.com',
        password: 'new-password',
    };

    //Send a POST response to the /register endpoint
    const response = await got.post(`${BASE_URL}/register`, {
        json: registerCredentials,
        responseType: 'json',
    });

    // Assert response status code
    t.is(response.statusCode, 201);    
});

// POST request to /register with duplicate registration data
test('User receives 409 for duplicate registration', async (t) => {

    const registerCredentials = {
        username: 'existing-username',
        email: 'existing-email@emaple.com',
        password: 'existing-password',
    };

    //Send a POST request ti the /register endpoint
    const response = await got.post(`${BASE_URL}/register`, {
        json: registerCredentials,
        responseType: 'json',
        throwHttpErrors: false,
    });

    t.is(response.statusCode, 409);
    
});
