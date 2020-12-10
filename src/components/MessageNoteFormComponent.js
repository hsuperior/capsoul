import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

// This component is just for the input form
class MessageNoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      recipientEmail: "",
      messageText: "",
      newNote: {
        messageText: "",
        type: "",
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    // Grab "value" attribute of target
    const noteInput = event.target.value;
    // Grab "name" attribute of target
    const name = event.target.name;
    // This method has to setState() to modify state
    this.setState({
      newNote: { messageText: noteInput },
    });
    this.setState({
      newNote: { ...this.state.newNote, [name]: noteInput },
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log("Current state is: " + JSON.stringify(this.state));
    alert("Current state is: " + JSON.stringify(this.state));
  }

  render() {
    console.log(this.state.newNote);
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="recipient">Who is this Capsoul For? (E-mail)</Label>
            <Input
              type="email"
              name="recipientEmail"
              id="recipientEmail"
              placeholder="example@awesomemail.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="messageText">The Special Message</Label>
            <Input
              type="text"
              name="messageText"
              id="messageText"
              placeholder="Congratulations on your new job! You deserved it."
              value={this.state.newNote.messageText}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="messageText2">
              Type (Love, Encouragement, Congratulations)
            </Label>
            <Input type="select" name="messageType" id="messageType">
              <option>Love</option>
              <option>Encouragement</option>
              <option>Congratulations</option>
            </Input>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        <div>Your Message: {this.state.newNote.messageText}</div>
      </div>
    );
  }
}

/* const MessageNoteForm = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderMessageNoteFormComponent />
                </div>
            </div>
        </div>
    )
} */
export default MessageNoteForm;
