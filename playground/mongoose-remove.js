const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// }).catch((e) => console.log(e));

Todo.findByIdAndRemove('5a5f8bc522377083365b7a22').then((todo) => {
    console.log(todo);
}).catch((e) => console.log(e));