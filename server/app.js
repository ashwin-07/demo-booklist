const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross origin requests
app.use(cors())

const uri = process.env.DB_URL
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
    console.log("connected to db")
});

mongoose.connection.on('error', function(err){
    console.log("Mongoose default connection has occured "+err+" error");
});

//cleanup on program exit
process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log("Mongoose default connection is disconnected due to application termination");
        process.exit(0)
    });
});

app.use('/graphql', graphqlHTTP({
        schema,
        graphiql:true
}));

app.listen(4000, () => {
    console.log("listening...");
});