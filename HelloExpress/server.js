const express = require("express");
const app = express();

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// req is short for request
// res is short for response

app.get("/api", (req, res) => {
  res.json({ message: "Hello World!"});
});











const server = app.listen(8000, () =>
  console.log(`Server up on port: ${server.address().port}!`)
);
