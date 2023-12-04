const test = require('ava');
const got = require('got');

function sum(a, b) {
    return a + b;
}

test('adds 1 + 2 to equal 3', (t) => {
    t.is(sum(1, 2), 3);
});
