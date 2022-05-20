const express = require("express"); //importing express
const cors = require("cors");// import cors (cross origin resource sharing)

const app = express(); //create our app variable which is an instance of express
const port = 8000; //declaring a port for the backend api to run in (localhost:8000)

//NEED THIS TO HANDLE POST REQUESTS. HAVE THESE TWO LINES BEFORE THE ROUTES!!!
app.use(express.json()); //lets our app convert form info into json
app.use(express.urlencoded({extended:true})); //lets our app parse form information
app.use(cors());// enable cors to share resources back and forth between the back end and front end

require("./server/config/mongoose.config");

//routes here- MAKE SURE ROUTES IMPORT IS BELOW ALL THE APP.USE COMMANDS ABOVE
require("./server/routes/products.routes")(app);



//THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port, ()=>console.log(`Listening on port ${port}`));