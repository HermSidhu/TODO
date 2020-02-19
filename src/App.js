import React, { Component } from 'react';
import './style.css';
import './weather.css';
import Todos from './Todos';
import AddToDO from './AddToDo';
import Moment from 'react-moment';
import { waitForElementToBeRemoved } from '@testing-library/react';

class App extends Component {

  state = {
    todos: [
      // { id: 1, content: 'buy some milk' },
      // { id: 2, content: 'play some mario kart' }
    ]
  }

  componentWillMount() {
    const list = window.localStorage.getItem('TODO');
    const todos = JSON.parse(list);
    console.log(todos)

    if (window.localStorage.getItem('TODO')) {
      this.setState({
        todos
      })
    } else {
    }
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    }, () => {
      window.localStorage.setItem('TODO', JSON.stringify(this.state.todos));
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    }, () => {
      window.localStorage.setItem('TODO', JSON.stringify(this.state.todos));
    })
    console.log(JSON.stringify(this.state.todos));
  }

  clearData = () => {
    window.localStorage.clear()
    window.location.reload(false);
  }

  render() {
    return (
      <div className="App">

        <div className="container">

          <div className="header">
            <div className="clear" onClick={this.clearData}>
              <i className="fa fa-refresh"></i>
            </div>
            <div id="date">
              <Moment format="MMMM D, YYYY">{this.props.dateToFormat}</Moment>
            </div>
            <div className="weatherContainer">
              <div className="notification"> </div>
              <div className="weather-container">
                <div className="weather-icon">
                  <img src="icons/unknown.png" alt="" />
                </div>
                <div className="temperature-value">
                  <p>- °<span>C</span></p>
                </div>
                <div className="temperature-description">
                  <p> - </p>
                </div>
                <div className="location">
                  <p>-</p>
                </div>
              </div>
            </div>

          </div>

          <div className="content">
            <ul id="list">
              <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            </ul>

          </div>
          <div className="add-to-do">
            <AddToDO addTodo={this.addTodo} />
          </div>
        </div>

      </div>
    );
  };
}

export default App;
