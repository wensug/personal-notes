let mongoose = require('mongoose');
let Note = require('../src/backend/models/notes.model');

//Requiere the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/backend/server');
let should = chai.should();

chai.use(chaiHttp);

// Test the notes routes

describe('Notes', () => {
    beforeEach((done) => { //Before each test we empty the database
        Note.remove({}, (err) => { 
           done();           
        });        
    });
    
    //   Test the /GET route
  
    describe('/GET Note ', () => {
        it('it should GET all the Notes', (done) => {
            chai.request(server)
                .get('/notes')
                .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('array');
                        res.body.length.should.be.eql(0);
                    done();
                 });
        });
    });
});

