const express = require('express');

const tracer = require('dd-trace').init({
    enabled: true,
    logInjection: true,
    hostname: 'datadog-agent',
    port: 8126,
});

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/index'));

app.listen(3000);
console.log('Server on port', 3000);