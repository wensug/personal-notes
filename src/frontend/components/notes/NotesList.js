import React from "react";
import Note from './Note'

class NotesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    fetch('/notes/')
      .then(response => response.json())
      .then(notes => this.setState({ notes }))
      .catch(error => console.log(error));
  }
  
  // handleDelete(id) {
  //   fetch('/notes/'+id, {
  //     method:'delete'
  //   }).then(response => response.json())
  //     .then(notes => {
  //       this.setState({
  //         notes: this.state.notes.filter(el => el._id !== id)
  //       })
  //   })
  //   .catch(error => console.log(error));
  // }

  noteList() {
    return this.state.notes.map(note => {
      return (
        <Note 
          _id={note._id}
          title={note.title} 
          text={note.text}
          date={note.date}
          key={note.title}
          // handleDelete={this.handleDelete()}
        />
      )
    });
  }
  render() {
    return (
      <div className='container'>
        <h3 align="center" style={{ marginTop: 110 }} >Notes List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Text</th>
              <th>Created</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.noteList()}</tbody>
        </table>
      </div>
    );
  }
}

export default NotesList;
