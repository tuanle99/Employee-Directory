import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    results: [],
  };

  componentDidMount() {}

  handleBtnClick = (event) => {
    event.preventDefault();

    API.getUserByNat(event.target.value)
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <SearchForm handleBtnClick={this.handleBtnClick} />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
