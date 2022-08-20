import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cards({ title, content, img, route }) {
  return (
    <div
      style={{
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10
      }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <Link to={route}>
            <Button variant="primary">More</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
