import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
} from "reactstrap";

// This component should draw out the actual Note
// (including message and image on top left and bottom right of the note)
function RenderNote({ messageText, messageType }) {
  return (
    <Card>
      <CardHeader>Message Header: {} </CardHeader>
      <CardBody>
        <CardText>Message text: {messageText}</CardText>
      </CardBody>
    </Card>
  );
}

function MessageNote(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md m-1">
          <RenderNote
            messageText={props.messageText}
            messageType={props.messageType}
          />
        </div>
      </div>
    </div>
  );
}

export default MessageNote;
