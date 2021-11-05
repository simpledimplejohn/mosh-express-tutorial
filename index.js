// loading express with the require method
const express = require('express');
// a const for calling the expression, called app by convention
const app = express()

//app.use is how you add middleware
// very important--adds some middleware that makes it so we don't have to change strings to json
app.use(express.json()); //parses into json() object, puts in request.body
app.use(function(req,res,next) {
  console.log('logging...');
  next(); //passes control into the next middleware object otherwise it hangs
});
app.use(express.static('public')); //static files are now in public

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

// GET ALL
app.get('/api/courses', (request, response) => {
  response.send(courses); //in place of a database call we are using an array of three numbers
})

//GET BY ID
// how to find a course using the find method, c is courses
app.get('/api/courses/:id', (request, response) => {
  const course = courses.find(c => c.id === parseInt(request.params.id))
  if (!course) return response.status(404).send('the course with the id was not found'); //return means exit out after the cleaner way of writing the code
  response.send(course); //works as an else statement
});

// POST API make a new course this will mean sending data that needs to be validated
app.post('/api/courses', (request, response) => {

  if(!request.body.name || request.body.name.length < 3) {
    // 400 bad request
    response.status(400).send("Name is required and minimum 3 characters");
    return;
  }
  const course = {
    id: courses.length + 1, //generates an ID (not nec in databases)
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
  if (!course) {
    response.status(404).send('the course with the id was not found')
    return; //if invalid exit
  }
  //otherwise validate
  //if invalid return 400
  if(!request.body.name || request.body.name.length < 3) {
    // 400 bad request
    response.status(400).send("Name is required and minimum 3 characters");
    return; //exits code if not okay
  }

  //update course 
  course.name = request.body.name;
  //return updated course
  response.send(course);
})

// DELETE BY ID
app.delete('/api/courses/:id', (request, response) => {
  //look up course
  //if not exist return 404
  const course = courses.find(c => c.id === parseInt(request.params.id))
  if (!course) {
    response.status(404).send('the course with the id was not found')
    return; //exits code if not found
  }

  //delete with splice
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  //return deleted course
  response.send(course)


})



//PORT is our environment variable for our port, use this if available otherwise use 3000
const port = process.env.PORT || 3000;
// must have a listener
app.listen(port, () => console.log(`WORKS listening on port ${port}....`))