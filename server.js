const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(`${__dirname}/`));


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});

app.get('/apartments', function(req, res) {
    res.sendFile(path.join(__dirname + '/apartments.html'));
});

app.get('/amenities', function(req, res) {
    res.sendFile(path.join(__dirname + '/amenities.html'));
});

app.get('/neighborhood', function(req, res) {
    res.sendFile(path.join(__dirname + '/neighborhood.html'));
});

app.get('/pets', function(req, res) {
    res.sendFile(path.join(__dirname + '/pets.html'));
});

app.get('/gallery', function(req, res) {
    res.sendFile(path.join(__dirname + '/gallery.html'));
});

app.get('/leasing', function(req, res) {
    res.sendFile(path.join(__dirname + '/leasing.html'));
});

app.get('/resident-portal', function(req, res) {
    res.sendFile(path.join(__dirname + '/resident-portal.html'));
});




app.set('port', process.env.PORT || 5000);
// Listen for requests
const server = app.listen(app.get('port'), function() {
	const port = server.address().port;
	console.info(`Magic happens on port ${port}`);
});
