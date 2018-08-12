import React from "react";
import Chatkit from "@pusher/chatkit";
import MessageList from "./components/MessageList";
import SendMessageForm from "./components/SendMessageForm";
import RoomList from "./components/RoomList";
import NewRoomForm from "./components/NewRoomForm";

import { tokenUrl, instanceLocator } from "./config";

class App extends React.Component {
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
            console.log("message.text: ", message.text);
          }
        }
      });
    });
  }

  render() {
    return (
      <div className="app">
        <RoomList />
        <MessageList />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
