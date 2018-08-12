import React from "react";
import Chatkit from "@pusher/chatkit";
import MessageList from "./components/MessageList";
import SendMessageForm from "./components/SendMessageForm";
import RoomList from "./components/RoomList";
import NewRoomForm from "./components/NewRoomForm";

import { tokenUrl, instanceLocator } from "./config";

class App extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          messages: []
      }
  }

  componentDidMount() {
    const chatManager = new Chatkit.chatManager({
      instanceLocator,
      userId: "jfrank77",
      tokenProvider: new Chatkit.tokenProvider({
        url: tokenUrl
      })
    });

    chatManager.connect().then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: 13705030,
        hooks: {
          onNewMessage: message => {
              this.setState({
                  messages: [...this.state.messages, message]
              })
          }
        }
      });
    });
  }

  render() {
    return (
      <div className="app">
        <RoomList />
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
