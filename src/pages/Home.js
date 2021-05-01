/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import API from "../utils/API";
import { Card } from "react-bootstrap";
import Container from "../components/Container";
import Row from "../components/Row";

class Home extends Component {
  state = {
    // search: "",
    results: [],
  };

  componentDidMount() {
    API.getRandomUser()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Container>
        {console.log(this.state.results)}
        <Row>
          {this.state.results.map((user) => {
            return (
              <div key={user.id.value}>
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
      </Container>
    );
  }
}

export default Home;
