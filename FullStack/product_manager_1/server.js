const express = require("express"); 

const app = express(); 
const port = 8000; 

app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 


require("./server/config/mongoose.config");
//****************************** */
//***   ALL ROUTES ABOVE HERE
//****************************** */
// require("./server/routes/quote.routes")(app);



//App.listen is last line of code
app.listen(port, ()=>console.log(`Listening on port ${port}`));