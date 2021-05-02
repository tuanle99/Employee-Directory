/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchResults from "../components/SearchResults";

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
        <SearchResults results={this.state.results} />
      </Container>
    );
  }
}

export default Home;
