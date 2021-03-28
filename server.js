// Load the express module into our script
const express = require('express');

const app = express(); // Creates a server application.
const PORT = 3000;
/**
 * req  / request => All information about the request the server received
 * res / response => methods which can be called to create and send a response to the client
 */
const handleRequest = (request, response) => {
    console.log(request.query);
    response.send('ok');
};

// Setup a route to handle
// handle the get request to the '/' path 
// www.example.com => wwww.example.com/ => '/'
app.get('/', handleRequest);

// www.example.com/about =>  '/about'
app.get('/about', handleRequest);

// request are handled by callbacks
// express will pass paramter to the callbacks

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

