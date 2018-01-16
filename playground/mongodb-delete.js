const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');
    const myDb = db.db('TodoApp');

    //delete Many
    // myDb.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // myDb.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // myDb.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // myDb.collection('Users').deleteMany({name: 'Leena'}).then((result) => {
    //     console.log(result.result);
    // });

    myDb.collection('Users').findOneAndDelete({_id: new ObjectID('5a5e1d7722377083365b79ea')}).then((result) => {
        console.log(result);
    });

     //db.close();
});