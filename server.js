const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


// initialize express app
const app = express();



require('dotenv').config();
require('./config/database');




// mount middelware app.use()
app.use(morgan('dev'));
app.use(express.json()); // converts incoming json into req.body
app.use(cors());



// mount our routes app.use()
app.use('/api/snippets', require('./routes/api/snippets'));


// tell the app to listen on port 3001
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express is listening for AJAX requests on port ${port}`);
});
