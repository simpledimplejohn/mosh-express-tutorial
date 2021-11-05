# __Practicing Express Mosh__

### __Description__
Following the Mosh tutorial in Node.js to build a basic express webserver.

### __Links__



### __Building This From Scratch__
To set up Express from scratch do the following:
1. Create a root folder and navigate into it.
2. Run `npm init`
3. Run `npm install express`
4. Create a .gitignore file with `node_modules` in it
5. Install nodemon to watch your server when you make updates with `sudo npm i -g nodemon`
6. now run the server with `nodemon index.js`
7. Set an environment variable of 5000 with code in index.js and command line `export PORT=5000`
8. Add joi to validate more simply with `npm i joi@13.1.0` use this version as the syntax has changed


### __Run instructions__

1. Download repo
2. Navigate to Root folder
3. Run `npm instal`
4. In terminal run: `node index.js`
5. In Chrome navigate to `localhost:3000`

### __Postman Instructions For Each Rout__

0. Start--run nodemon server `nodemon index.js`
1. GET ALL: in postman enter `GET  http://localhost:3000/api/courses`
    Returns built in object array.
2. GET BY ID: `GET  http://localhost:3000/api/courses/1`
3. POST NEW COURSE `POST  http://localhost:3000/api/courses`
  In body set format to `raw` and type to `JSON` add this to body:
  `{ "name": "New Course" }`
4. PUT NEW COURSE `PUT  http://localhost:3000/api/courses/1`
 In body set format to `raw` and type to `JSON` add this to body:
  `{ "name": "New Course Putted" }`
  Trigger an error by entering an ID that is not in the list
  Or by entering no name in the body
5. DELETE `DELETE  http://localhost:3000/api/courses/1`

