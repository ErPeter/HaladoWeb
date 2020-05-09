import React from "react";
import { Button, Jumbotron, Container } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>My Log</h1>
          <p>Check out from your cath log</p>
          <p>
            <Button href="/my-log" variant="primary">Go to</Button>
          </p>
        </Container>
      </Jumbotron>
      <Jumbotron fluid>
        <Container>
          <h1>Community Log</h1>
          <p>Check out from communnity log</p>
          <p>
            <Button href="/community-log" variant="primary">Go to</Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Home;
