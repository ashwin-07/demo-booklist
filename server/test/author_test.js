const assert = require('assert')
const mongoose = require('mongoose')
const Author = require('../mongo/models/author')

describe ('nesting records', function(){

    it('Creates an author with sub-docs', function(done){
        var auth = new Author({
            name:'Paul',
            books:[{title:"alchemist",pages:233}]
        })
        auth.save().then(function(result){
            Author.findOne({name:'Paul'}).then(function(record){
                assert(record.books.length === 1)
                done()
            })
        });
    });
})