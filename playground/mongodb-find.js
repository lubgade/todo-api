const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');
    const myDb = db.db('TodoApp');

    // myDb.collection('Todos').find({
    //     _id: new ObjectID('5a5e167422377083365b79e7')
    // }).toArray().then((docs) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch docs', err)
    // });

    // myDb.collection('Todos').find().count().then((count) =>{
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch count', err)
    // });

    myDb.collection('Users').find({
        name: 'Leena'
    }).toArray()
    .then((users) => {
        console.log('Users');
        console.log(JSON.stringify(users, undefined, 2));
        console.log(`No of users: ${users.length}`);
    }, (err) => {
        console.log('Unable to fetch docs', err);
    });


    //db.close();
});