import React from 'react';

class NewRoomForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roomName: '',
    };
  }

  handleChange = event => {
    this.setState({
      roomName: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createRoom(this.state.roomName);
    this.setState({
      roomName: '',
    });
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit} className="new-room-form">
          <input
            value={this.state.roomName}
            onChange={this.handleChange}
            type="text"
            placeholder="NewRoomForm"
            required
          />
          <button id="create-room-btn" type="submit">+</button>
        </form>
    );
  }
}

export default NewRoomForm;
