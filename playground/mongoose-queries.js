const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5a5ea2a4dc0d1e171dc9e5d011';

// if(!ObjectID.isValid(id)){
//     return console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var id = '5a5e4209f8103709aee08ad2';

if(!ObjectID.isValid(id)){
    return console.log('Not a valid user id');
}

User.findById(id).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log('User by id: ', user);
}).catch((e) => console.log(e));

