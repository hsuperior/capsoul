import React, { Component } from "react";
import ButtonComponent from "./ButtonComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import MessageNote from "./MessageNoteComponent";
import MessageNoteForm from "./MessageNoteFormComponent";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: props.messageText,
      messageType: props.messageType,
      miscInfo: { header: "Test Header", text: "Test Info Message" },
    };
    console.log("props :", JSON.stringify(props));
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <MessageNote
          messageText={this.state.miscInfo.header}
          messageType={this.state.miscInfo.text}
        />
        <MessageNoteForm />
      </div>
    );
  }
}

export default Message;
