import { Component } from 'react';
import shortid from 'shortid';

export default class TodoInput extends Component {
  state = {
    text: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { text } = this.state;
    const trimmedText = text.trim();
    if (trimmedText.length > 0) {
      this.props.onSubmit({
        text,
        completed: false,
        id: shortid.generate(),
      });
      this.setState({
        text: '',
      });
    }
  };
  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="todo-input-container">
        <input
          autoComplete="off"
          className="todo-input"
          value={text}
          onChange={this.handleChange}
          name="text"
          type="text"
          placeholder="What needs to be done?"
        />
      </form>
    );
  }
}
