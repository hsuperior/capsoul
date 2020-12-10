import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
} from "reactstrap";

// Various Info cards on the home page, intake a chunk of info
// info header, info message [maybe pass more details into a modal...?]
function RenderInfoCard({ infoMessage }) {
  console.log("RenderInfoCard: ", { infoMessage });
  return (
    <Card>
      <CardHeader>{infoMessage.header}</CardHeader>
      <CardText>{infoMessage.description}</CardText>
    </Card>
  );
}

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <RenderInfoCard infoMessage={props.infoMessage[0]} />
        </div>
        <div className="col-md-4 ml-auto">
          <RenderInfoCard infoMessage={props.infoMessage[1]} />
        </div>
        {/* <div className="col-md-4 offset-md">1-a</div>
        <div className="col-md-4 offset-md">1-b</div> */}
      </div>
      <div className="row">
        <div className="col align-self-center">Capsoul</div>
      </div>

      <div className="row">
        <div className="col-4 offset-md">
          <RenderInfoCard infoMessage={props.infoMessage[2]} />
        </div>
      </div>
    </div>
  );
}

export default Home;
