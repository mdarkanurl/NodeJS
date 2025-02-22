const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

app.get('^/$|index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('^/new-page(.html)?$|test(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/new-page.html'));
});

app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page'); // 302 by default statusCode
});

// Route handlers
app.get('/hey(.html)?', (req, res, next) => {
    console.log('Hey route get a get req');
    next();
}, (req, res) => {
    res.send('Hello I\'m from "hey" route');
});

// Chaining route handlers
const one = (req, res, next) => {
    console.log('One print');
    next();
}

const two = (req, res, next) => {
    console.log('Two print');
    next();
}

const three = (req, res) => {
    console.log('Three print');
    res.send('Task finished');
}

app.get('/chain(.html)?', [one, two, three]);

app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));