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
    
    // Test the /POST route

    describe('/POST Note', () => {
        it('it should not POST a note without text field', (done) => {
            let note = {
                title: "Run Park",
                date: "2019-07-29"
            }
          chai.request(server)
              .post('/notes/add')
              .send(note)
              .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.have.property('text');
                done();
              });
        });

        it('it should POST a note ', (done) => {
            let note = {
                title: "Shopping List",
                text: "Carrots, onion, avocado, coriander, doritos and wine",
                date: "2019-08-25"
            }
          chai.request(server)
              .post('/notes/add')
              .send(note)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('title');
                    res.body.should.have.property('text');
                    res.body.should.have.property('date');
                    res.body.should.have.property('status');
                done();
              });
        });
    });
    // Test the /GET/:id route
    describe('/GET/:id note', () => {
        it('it should GET a note by the given id', (done) => {
            let note = new Note({ title: "Shopping List", text: "Carrots, onion, avocado, coriander, doritos and wine",
            date: "2019-08-25" });
            note.save((err, note) => {
                chai.request(server)
              .get('/notes/' + note.id)
              .send(note)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('title');
                    res.body.should.have.property('text');
                    res.body.should.have.property('date');
                    res.body.should.have.property('status');
                    res.body.should.have.property('_id').eql(note.id);
                done();
              });
            });
  
        });
    }); 
    
    //Test the /PUT/:id route

    describe('/PUT/:id note', () => {
        it('it should UPDATE a note given the id', (done) => {
            let note = new Note({title: "Dinner Friday", text: "Call Laura, Helen and Anna", date: "2019-08-24" })
            note.save((err, note) => {
                  chai.request(server)
                  .put('/notes/update/' + note.id)
                  .send({title: "Dinner Saturday", text: "Call Laura, Helen and Anna", date: "2019-08-24"})
                  .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        // res.body.should.have.property('message').eql('Note updated!');
                        res.body.should.have.property('title').eql('Dinner Saturday');
                    done();
                  });
            });
        });
    });

    //Test the /Delete/:id route

    describe('/DELETE/:id note', () => {
        it('it should DELETE a note given the id', (done) => {
            let note= new Note({title: "Dinner Friday", text: "Call Laura, Helen and Anna", date: "2019-08-24"})
            note.save((err, note) => {
                  chai.request(server)
                  .delete('/notes/' + note.id)
                  .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Note deleted.');
                    done();
                  });
            });
        });
    });


});

