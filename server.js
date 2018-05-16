// - - - - = = = = Configurations = = = = - - - - 

// express
const express = require('express');
const app = express();

// path
const path = require('path');

// body parser
const bodyParser = require('body-parser');

// middleware
app.use(express.static(__dirname + '/client/dist/client'));
app.use(bodyParser.json());


// - - - - = = = = Model = = = = - - - - //
const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quote_ranks');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

//-----------------------//
//---- author schema ----//
//-----------------------//

const authorSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Author name is required'],
        minlength: [3, 'Author name must be greater than 3 characters'],
        unique: true
    },
    quotes: [{
            content: { 
                type: String, 
                minlength: [3, 'Quote name must be greater than 3 characters']
            },
            votes: { 
                type: Number, 
                default: 0
            }
        }]
}, { timestamps: true });

const Author = mongoose.model('Author', authorSchema);

// - - - - = = = = Controller = = = = - - - - 
const authorController = {
    index: (request, response) => {
  
        Author.find()
            .then(authors => response.json( {message: "success", data: authors} ))
            .catch(error => response.json( {message: "error", errors: error } ));
    },
    find: (request, response) => {

        Author.find({name: request.params.name})
            .then(author => response.json( {message: "success", data: author} ))
            .catch(error => response.json( {message: "error", errors: error}));
    },
    getOne: (request, response) => {

        Author.findOne({_id: request.params.id})
            .then(author => response.json( {message: "success", data: author} ))
            .catch(error => response.json( {message: "error", errors: error}));
    },
    create: (request, response) => {
        console.log("dot name: " + request.body.name)
        const newAuthor = new Author({
            name: request.body.name
        })
        Author.create(newAuthor)
            .then(author => response.json( {message: "success", data: author} ))
            .catch(error => response.json( {message: "error", errors: error} ));
    },
    edit: (request, response) => {

        Author.findByIdAndUpdate({_id: request.params.id}, request.body, {upsert: true, new: true, runValidators: true})
            .then(author => response.json( {message: "success", data: author} ))
            .catch(error => response.json( {message: "error", errors: error} ));
    },
    delete: (request, response) => {

        Author.deleteOne({_id: request.params.id})
            .then(author => response.json( {message: "success", data: author} ))
            .catch(error => response.json( {message: "error", errors: error} ));
    }
  };
  
  
  // - - - - = = = = Routes = = = = - - - - 
  app 
    .get('/api/authors', authorController.index)
    .post('/api/authors', authorController.create)
    .get('/api/authors/:id', authorController.getOne)
    .get('/api/authors/:name', authorController.find)
    .put('/api/authors/:id', authorController.edit)
    .delete('/api/authors/:id', authorController.delete)
    .all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
  });

// - - - - = = = = Server Listener = = = = - - - - 
const port = 1337;
app.listen(port, ()=> console.log(`Express server listening on port ${port}`));