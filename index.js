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
  response.send('I have been getted')
});

app.get('/api/courses', (request, response) => {
  response.send([1,2,3]); //in place of a database call we are using an array of three numbers
})

// must have a listener
app.listen(3000, () => console.log('WORKS listening on port 3000....'))