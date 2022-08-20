import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "./Card";
function Home() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}> Welcome to Thingsenz </h2>
      <div>
        <Container>
          <Row>
            <Col>
              <Cards
                title="Calculator"
                content="An android Calculator app"
                img="https://github.com/JohnX4321/Calculator/blob/main/images/play_store_512.png?raw=true"
                route="calculator"
              />
            </Col>
            <Col>
              <Cards
                title="Flashlight"
                content="An Android Flashlight app"
                img="https://github.com/JohnX4321/Compose_Flashlight/blob/main/images/play_store_512.png?raw=true"
                route="flashlight"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
