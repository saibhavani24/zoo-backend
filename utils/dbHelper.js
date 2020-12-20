const mongoose = require('mongoose');
const dbURL = require('../config')
        
const {UserModel} = require('../models/user')
async function initializeDB () {
    try {
        await mongoose.connect(dbURL.mongoUrl, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true
        });
    } catch (err) {
        console.log(err);
    }
}
// insert data
function insertDocument (userData, callback) {
    UserModel.create(userData, function (err, result) {
        err? console.log(err) : console.log(result);
        return callback(err, result)
    });
}
function getDocument(callback) {
    UserModel.find({}, (err, res) => {
        return callback(err, res);
    })
}

module.exports = {
    initDB: initializeDB,
    insertDoc: insertDocument,
    getDoc: getDocument
}

// mongodb+srv://saibhavani:<password>@cluster0.h9oqs.mongodb.net/<dbname>?retryWrites=true&w=majority