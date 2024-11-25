const express = require('express');
const app = express()
app.use(express.json())
var studentArray = require('./initialData')
const port = 3000

app.get('/', (req, res) => {
    res.send(studentArray);
})

app.get('/student/:id', (req, res) => {
    let id = req.params.id;
    if (!isNaN(id)) {
        let student = studentArray.find((item) => {
            return (item.id === parseInt(id))
        })
        if (student === undefined) {
            res.status(404).send('Student not found')
        }
        res.send(student)
    }
    else {
        res.send('Invalid ID')
    }
})

app.post('/student', (req, res) => {
    let reqKeys = Object.keys(req.body)
    console.log(reqKeys);
    if (reqKeys.includes('name') && reqKeys.includes('age') && reqKeys.includes('division')) {
        let name = req.body.name;
        let age = req.body.age;
        let division = req.body.division;
        let student = {
            id: studentArray.length + 1,
            name: name,
            age: age,
            division: division
        }
        studentArray.push(student);
        res.send(studentArray)
    }
    else{
        res.status(404).send('key is missing');
    }
})

app.listen(port, () => {
    console.log(`Server is UP and running on ${port}`);
})
