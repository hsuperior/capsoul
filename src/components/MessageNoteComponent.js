import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderNote({messageText, messageType}) {
    return (
        <Card>
            <CardBody>
                <CardText>{messageText}</CardText>
            </CardBody>
        </Card>
    );
}

function MessageNote(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderNote messageText={props.messageText} messageType={props.messageType}/>
                </div>
            </div>
        </div>
    );
}

export default MessageNote;

