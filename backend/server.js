const express = require('express');
const dotenv = require('dotenv').config();

const colors = require('colors')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000



connectDB()

const app = express();

//middleware in order to use body data use express json and urlencoded
app.use(express.json());
app.use(express.urlencoded({extended: false}))



app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`))

