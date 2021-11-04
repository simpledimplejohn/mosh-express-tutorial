// loading express with the require method
const express = require('express');
// a const for calling the expression, called app by convention
const app = express()

// available arguments
// app.get()
// app.post()
// app.put()
// app.delete()

// get takes two inputs and a fx
app.get('/', (request, response) => {
  response.send('I have been getted again')
});


app.get('/api/courses', (request, response) => {
  response.send([1,2,3]); //in place of a database call we are using an array of three numbers
})

// /api/courses/1
app.get('/api/course/:id', (request, response) => {
  response.send(request.params.id); //requests rout parameters
  //response.send(req.query); with a query string
})

//PORT is our environment variable for our port, use this if available otherwise use 3000
const port = process.env.PORT || 3000;
// must have a listener
app.listen(port, () => console.log(`WORKS listening on port ${port}....`))