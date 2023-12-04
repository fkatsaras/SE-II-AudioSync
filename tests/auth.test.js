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

//Succesful login
test('User succesfully logs in with valid credentials', async (t) => {

    const response = await t.context.got.post(`${BASE_URL}/login`, {
        json: { username: 'valid-username', password: 'valid-password' },
        responseType: 'json',
    });

    t.is(response.statusCode, 200);
    t.is(response.body.message, 'User succesfully logged in');

});

//Unsuccesful login
test('User receives 401 for incorrect credentials during login', async (t) => {

    const response = await t.context.got.post(`${BASE_URL}/login`, {

        json: { username: 'invalid-username', password: 'invalid-password' },
        responseType: 'json',
        throwHttpErrors: false, 
    });

    t.is(response.statusCode, 401);
    t.is(response.body.message, 'Incorrect username or password')
})

//POST request to /register: Successful registration

test('User successful;y registers with valid information', async (t) => {

    const response = t.context.got.post(`${BASE_URL}/register`, {
        json: { 
            username: 'new-username',
            email: 'new-email@example.com',
            password: 'new-password'
         },
        responseType: 'json',
    });

    t.is(response.statusCode, 201);
    t.is(response.body.message, 'User successfully registered');

});

// POST request to /register with duplicate registration data
test('User receives 409 for duplicate registration', async (t) => {
    
    const response = await t.context.got.post(`${BASE_URL}/register`, {
        json: {
            username: 'existing-username',
            email: 'existing-email@example.com',
        },
        responseType: 'json',
        throwHttpErrors: false, 
    });

    t.is(response.statusCode, 409);
    t.is(response.body.message, 'User account already exists');
    
});
