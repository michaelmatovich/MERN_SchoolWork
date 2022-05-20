const mongoose = require('mongoose');
db = "project_manager";

//change cluster name
mongoose.connect(`mongodb+srv://root:root@clustermay.6uoeb.mongodb.net/${db}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));