const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express();

//middleware in order to use body data use express json and urlencoded
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`))

