import React, { Component } from 'react';

class AddToDo extends Component {
  state = {
    content: '',
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: '',
    })
  }

  render() {
    return (
      <div>
        <i className="fa fa-plus-circle" onClick={this.handleSubmit}></i>
        <form onSubmit={this.handleSubmit}>
          <input type='text' id="input" placeholder="Add a to-do" onChange={this.handleChange} value={this.state.content} />
        </form>
      </div>
    )
  }
}

export default AddToDo;