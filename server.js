const express = require('express');
const { animals }  = require('./data/animals');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes/animalRoutes');
const htmlRoutes = require('./routes/htmlRoutes/index');


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));



app.listen(PORT, () =>{
console.log(`API server is now on ${PORT}`);
});