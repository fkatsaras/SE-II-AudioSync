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

