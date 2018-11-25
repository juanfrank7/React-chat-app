import React from 'react';

class SendMessageForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      message: '',
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({
      message: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="send-message-form">
        <input
          disabled={this.props.disabled}
          value={this.state.message}
          onChange={this.handleChange}
          placeholder="Type your message and hit Enter"
          type="text"
        />
      </form>
    );
  }
}

export default SendMessageForm;
