import React from 'react';
import { NavLink, Redirect } from 'react-router-dom'

class Note extends React.Component {
  constructor(props) {
    super()
    this.state={ redirect: false};
  }
  handleDelete(id) {
    fetch('/notes/'+id, {
      method:'delete',
    }).then(response => response.json(console.log('Deleted')))
      .then(this.setState({redirect: true}))
      .catch(error => console.log(error));
    
  }
  render() { 
    if(this.state.redirect) {
      return <Redirect to='/'/>;
    } else {
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
                <button onClick={() => this.handleDelete(_id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
      );
    }
  }
}

export default Note;