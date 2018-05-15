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


// - - - - = = = = Model = = = = - - - - 
const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

// author schema
const authorSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Author name is required'],
        minlength: [3, 'Author name must be greater than 3 characters'],
        unique: true
    }
}, { timestamps: true });
authorSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
const Author = mongoose.model('Author', authorSchema);


// - - - - = = = = Controller = = = = - - - - 
const authorController = {
    index: (request, response) => {
  
        Author.find({})
            .then(authors => response.json( {message: "success", data: authors} ))
            .catch(error => response.json( {message: "error", errors: error } ));
  
    },
    getOne: (request, response) => {

        Author.findOne({_id: request.params.id})
            .then(author => response.json( {message: "success", data: author} ))
            .catch(error => response.json( {message: "error", errors: error}));
    },
    create: (request, response) => {
        const newAuthor = new Author({
            name: request.body.name
        })
        Author.create(newAuthor)
            .then(author => response.json( {message: "success", data: author} ))
            .catch(error => response.json( {message: "error", errors: error} ));
  
    },
    edit: (request, response) => {

        Author.updateOne({_id: request.params.id}, request.body)
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
    .put('/api/authors/:id', authorController.edit)
    .delete('/api/authors/:id', authorController.delete)
    .all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
  });

// - - - - = = = = Server Listener = = = = - - - - 
const port = 1337;
app.listen(port, ()=> console.log(`Express server listening on port ${port}`));