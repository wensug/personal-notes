import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import NotesList from './components/notes/NotesList'
import EditNote from './components/editnote/EditNote'
import CreateNote from './components/createnote/CreateNote'
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
              <Route exact path='/' component={NotesList} />
              <Route exact path='/edit/:id' component={EditNote} />
              <Route exact path='/create' component={CreateNote} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
