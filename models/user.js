const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  email: String,
  password: String,
  name: String,
  age: Number,
  like: Number
});

// const UserModel = mongoose.model('User', userSchema);
module.exports = {
    UserModel: mongoose.model('User', userSchema)
}
