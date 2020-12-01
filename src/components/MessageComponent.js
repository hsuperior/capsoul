import React, { Component } from 'react';
import ButtonComponent from './ButtonComponent';
import Header from './HeaderComponent';
import MessageNote from './MessageNoteComponent';

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messageText: "Test Message Haha",
            messageType: "Encouragement",
        };
    }

    render() {
        const Message = () => {
            return (
                <div />
            )
        }
    }

    render(){
        return (
            <div>
                <Header />
                Hello Message
                <ButtonComponent />
                <MessageNote 
                    messageText={this.state.messageText}
                    messageType={this.state.messageType}
                />
            </div>
            
        );
    };
}

export default Message;