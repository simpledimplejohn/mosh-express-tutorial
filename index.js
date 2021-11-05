//installing joi as a class
//const Joi = require('joi');
// loading express with the require method
const express = require('express');
// a const for calling the expression, called app by convention
const app = express()

// very important--adds some midleware that makes it so we don't have to change strings to json
app.use(express.json());

//hard coded array of courses--no database yet
const courses = [
  { id: 1, name: 'course1 '},
  { id: 2, name: 'course2 '},
  { id: 3, name: 'course3 '},
]

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
  response.send(courses); //in place of a database call we are using an array of three numbers
})

// /api/courses/1
// how to find a course using the find method, c is courses
app.get('/api/courses/:id', (request, response) => {
  const course = courses.find(c => c.id === parseInt(request.params.id))
  if (!course) response.status(404).send('the course with the id was not found')
  response.send(course); //works as an else statment
});

// POST API make a new course this will mean sending data that needs to be validated
app.post('/api/courses', (request, response) => {

  if(!request.body.name || request.body.name.length < 3) {
    // 400 bad request
    response.status(400).send("Name is required and minimum 3 characters");
    return;
  }
  const course = {
    id: courses.length + 1,
    name: request.body.name //reads the body object
  };

  courses.push(course);
  response.send(course); //always return the response in the body of the post
});

//PUT to change something--needs the id because its a specific item we are changing
app.put('/api/courses/:id', (request, response) => {
  //look up course
  //if not exist return 404
  const course = courses.find(c => c.id === parseInt(request.params.id))
  if (!course) response.status(404).send('the course with the id was not found')
  //otherwise validate
  //if invalid return 400
  if(!request.body.name || request.body.name.length < 3) {
    // 400 bad request
    response.status(400).send("Name is required and minimum 3 characters");
    return;
  }

  //update course 
  course.name = request.body.name;
  //return updated course
  response.send(course);
})

app.delete('/api/courses/:id', (request, response) => {
  //look up course
  //if not exist return 404
  const course = courses.find(c => c.id === parseInt(request.params.id))
  if (!course) response.status(404).send('the course with the id was not found')
  


})



//PORT is our environment variable for our port, use this if available otherwise use 3000
const port = process.env.PORT || 3000;
// must have a listener
app.listen(port, () => console.log(`WORKS listening on port ${port}....`))