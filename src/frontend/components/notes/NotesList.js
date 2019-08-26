import React from "react";

class NotesList extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  notesList(){

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
          <tbody>{this.notesList()}</tbody>
        </table>
      </div>
    );
  }
}

export default NotesList;
