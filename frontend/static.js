const express = require('express');
const Path = require('path');
const app = express();
const port = process.env.PORT || 8000;
const auth = require('basic-auth')
const compare = require('tsscmp');
const requestIp = require('request-ip');

const list = [];
const check = (name, pass) => {
    let valid = true;   // Simple method to prevent short-circuit and use timing-safe compare
    valid = compare(name, 'zin') && valid;
    valid = compare(pass, 'star') && valid;

    return valid;
};

const basicAuth = (request, response, next) => {
    console.log(list, request.clientIp);
    if (list.includes(request.clientIp)) {
        return next();
    }

    const credentials = auth(request);
    if (credentials && check(credentials.name, credentials.pass)) {
        list.push(request.clientIp);
        return next();
    }

    response.set('WWW-Authenticate', 'Basic realm="my website"');
    return response.status(401).send("🙅🏻 nope");
};

/**
 * Routes
 */
app.use(requestIp.mw());
app.use(basicAuth);
app.use('/', express.static(Path.join(__dirname, './dist/zinsunion')));
app.listen(port, () => {   console.log(`Listening on port ${port}`); });
