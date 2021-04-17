const assert = require('assert');
const student = require('../mongo/models/students')

describe('saving records', function(){

   it('saves a record to db', function(done){
        var char = new student({
           name:'Mario'
        });

        char.save().then(function() {
           assert(char.isNew === false);
           done();
        });


   });

});