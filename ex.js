const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello there');
})

const courses = [
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'Cybersecurity' }
];

//http GET requests route
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

//request course by id
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("The course with the given ID was not found");
        return
    }
    res.send('This is the ' + course.name + " class");
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

//Post requests
app.post('/api/courses', (req, res) => {
    // you write the if code here
    //add an if statement so that the name of the course you post is .min(3) characters 
    if (req.body.name.length < 4) {
        res.status(400).send("Error: Course name must be at least 3 characters long.");
    }
    else {
        const course = {
            //we assign an ID and a name property
            id: courses.length + 1,
            name: req.body.name
        }
    }
    //YOU WRITE THE NEXT LINES OF code
    //next step: push it to the array
    //next step: the server should return the new resource to the client in the body of the response
    courses.push(course);

});

app.delete('/api/courses/:id', (req,res)=>{
    const course = course.find(c=> c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send("Error: Course not found.");
    }
    const index = courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
})