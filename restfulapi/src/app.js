const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const studentRouter = require("./routers/student");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//configure cors
const cors = require('cors');
app.use(cors({
    origin:'http://localhost:4200'
}));

//router register
app.use(studentRouter);



app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})