import React from 'react';
import { Link } from 'react-router-dom'

class Note extends React.Component {
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
            <Link to={"/edit/"+_id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={() => {this.props.handleDelete(_id)}} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default Note;