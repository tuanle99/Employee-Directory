import React from "react";
import "./style.css";
import Row from "../Row";
import { Card } from "react-bootstrap";

function SearchResults(props) {
  return (
    <Row>
      {props.results.map((user) => {
        return (
          <div key={user.login.username}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={user.picture.large} />
              <Card.Body>
                <Card.Title>
                  {user.name.first} {user.name.last}
                </Card.Title>
                <Card.Text>{user.email}</Card.Text>
                <Card.Text>Age: {user.dob.age}</Card.Text>
                <Card.Text>
                  Address: {user.location.street.number}{" "}
                  {user.location.street.name} {user.location.city}{" "}
                  {user.location.state}, {user.location.country}{" "}
                  {user.location.postcode}
                </Card.Text>
                <Card.Text>
                  Employee ID: {user.id.name} {user.id.value}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </Row>
  );
}

export default SearchResults;
