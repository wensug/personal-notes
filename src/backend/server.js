const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;

require('dotenv').config();

mongoose.Promise = global.Promise;
const uri = process.env.DB_URL_PRD;
mongoose.connect( uri, {useNewUrlParser: true})
    .then(res => console.log('Connected to DB'))
    .catch(err => console.log('Can not connect to the database' + err));

app.use(cors());
app.use(express.json())

const notesRouter = require('./routes/notes')

app.use('/notes', notesRouter);


// app.use(express.static(path.join(__dirname, '../../build')));

// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../../build', 'index.html'));
// });


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});