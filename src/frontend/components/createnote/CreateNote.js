import React from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

class CreateNote extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      text: '',
      date: new Date()
    };
  }

  onChangeTitle(e){
    this.setState({title: e.target.value});
  }

  onChangeText(e){
    this.setState({text: e.target.value});
  }

  onChangeDate(date){
    this.setState({date: date});
  }

  handleSubmit(event) {
    event.preventDefault(event);
    const note = {
        title: this.state.title,
        text: this.state.text, 
        date: this.state.date
    }
    console.log(note);
  }

  render() {
    return (
      <div className="container">
        <div style={{ marginTop: 100 }}>
          <h3>Add New Note</h3>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="form-group">
              <label>Title : </label>
              <input 
                type="text" 
                className="form-control"
                value={this.state.title} 
                onChange={(e) => this.onChangeTitle(e)}/>
            </div>
            <div className="form-group">
              <label>Text: </label>
              <input 
                type="text" 
                required 
                className="form-control"
                value={this.state.text} 
                onChange={(e) => this.onChangeText(e)} />

            </div>
            <div className="form-group">
              <label>Created: </label>
              <div>
                <DatePicker
                selected={this.state.date} 
                onChange={(e) => this.onChangeDate(e)} />
              </div>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Create Note"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateNote;
