const express = require('express')
const app = express()
const port = 3060
const cors = require('cors')
const configureDB = require('./config/db')
const { checkSchema } = require('express-validator')
const taskcltr = require('./app/controller/taskcontroller')
const taskValidationSchema = require('./app/validation/taskvalidation')
configureDB()
app.use(express.json())
app.use(cors())

app.post('/api/tasks', checkSchema(taskValidationSchema), taskcltr.create)
app.get('/api/tasks', taskcltr.getAlltask)
app.delete('/api/tasks/:id', taskcltr.destroy)
app.put('/api/tasks/:id', taskcltr.update)

app.listen(port, () => {
    console.log(`Task management app is successfully running on port ${port}`)
})
