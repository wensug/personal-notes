import React from 'react';
import { NavLink } from 'react-router-dom'

class Note extends React.Component {
  constructor(){
    super()
    this.state = {
      notes: []
    }
  }
  
  componentDidMount() {
    fetch('/notes/')
      .then(response => response.json())
      .then(notes => this.setState({ notes }))
      .catch(error => console.log(error));
  }

  handleDelete(id) {
    fetch('/notes/'+id, {
      method:'delete',
    }).then(response => response.json(console.log('Deleted')))
      .catch(error => console.log(error));
    
  }
  render() { 
   let { title, text, date, _id } = this.props;
  return (
        <tr>
          <td>
            {title}
          </td>
          <td>
            {text}
          </td>
          <td>
            {date}
          </td>
          <td>
            <NavLink to={"/edit/"+_id} className="btn btn-primary">Edit</NavLink>
          </td>
          <td>
            <NavLink to="/"> 
              <button onClick={() => this.handleDelete(_id)} className="btn btn-danger">Delete</button>
            </NavLink>
          </td>
        </tr>
    );
  }
}

export default Note;