import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Container from "../components/Container";

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
        <div>
          {this.state.results.map((item) => {
            return (
              <div key={item.id.value}>
                <Card image={item.picture.large} />
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default Home;
