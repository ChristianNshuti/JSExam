const express = require('express');

const app = express();

const students = [];

app.listen(3000);

class student {
    name;
    grade;
    
    getDetails() {
        return `name: ${this.name}, Grade: ${this.grade}`;
    }
} 

app.use(express.json());

app.post('/students' , (req,res) => {
    const { name,grade} = req.body;
    const stud = new student;
    stud.name = name;
    stud.grade = grade;
    students.push(stud);
    return res.status(200).json({message : "Added successfully!"})
})

app.get('/students', (req,res) => {
    let studentDetails = [];

    if(students.length === 0) {
        return res.status(404).json({message:"No student found try adding one!"});
    }
    else {
        for(let x = 0;x<students.length; x++) {
            studentDetails.push(students[x].getDetails());
        }
        res.send(studentDetails);
    }

})