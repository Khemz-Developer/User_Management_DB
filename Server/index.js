const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const cors =require("cors");
var jwt = require('jsonwebtoken');
require('dotenv').config();
//middleware
app.use(cors());
app.use(express.json());
//import routes
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

//post request for toke n
app.post('/jwt', async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
  res.send({ token });
})



app.get("/",(req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); 

//jalithapramod 1234

//connecting to mongodb
mongoose
  .connect(
    `mongodb+srv://jalithapramod:1234@user-management-db.vs3vvxw.mongodb.net/User-Management-Db?retryWrites=true&w=majority`
  )
  .then(console.log("connecting to MongoDb database"))
  .catch((error) => {
    console.log("eroor connecting to mongodb");
  });
