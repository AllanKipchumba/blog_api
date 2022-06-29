require("dotenv").config();
const express = require("express");
const userRouter = require("./routers/users");
const mongoose = require("mongoose");

// mongodb  connection
mongoose.connect("mongodb://localhost:27017/blog-api", {
    useNewUrlParser: true,
});
// end of db connection

const app = express();
const port = 5000;
app.use(express.json());

// app.get("/", (req, res) => {
//     console.log(`Hello express`);
// });

app.use(userRouter);

app.listen(port, () => console.log(`App listening on port ${port}`));