const mongoose = require('mongoose')

//ES6 Promise

mongoose.Promise = global.Promise;

//connect to db before test run

before(function(done){
    // //connect to mongodb
    mongoose.connect('mongodb://localhost/testBook', { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.once('open', function(){
        console.log("connection established to db");
        done();
    }).on('error', function(error){
        console.log("connection error.. "+error);
});

beforeEach(function(){
    mongoose.connection.collections.students.drop(function(){
       // done();
    })
})



})

