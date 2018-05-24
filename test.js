const test = require('ava');
const delay = require('delay');
const whiler = require('.');

test('sync', async t => {
    let i = 0;
    await whiler(() => {
        i++;
        return i < 10;
    });
    t.is(i, 10);
});

test('async', async t => {
    let i = 0;
    await whiler(async () => {
        i++;
        await delay(10);
        return i < 10;
    });
    t.is(i, 10);
});

test('throw', async t => {
    const fixtureErr = new Error('fixture');
    await whiler(() => {
        throw fixtureErr;
    }).then(() => t.fail()).catch(err => {
        t.is(err, fixtureErr);
    });
});

test('reject', async t => {
    const fixtureErr = new Error('fixture');
    await whiler(() => Promise.reject(fixtureErr)).then(() => t.fail()).catch(err => {
        t.is(err, fixtureErr);
    });
});
