import React from "react";
import "./style.css";
import Container from "../Container";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  const natList = [
    "AU",
    "BR",
    "CA",
    "CH",
    "DE",
    "DK",
    "ES",
    "FI",
    "FR",
    "GB",
    "IE",
    "IR",
    "NO",
    "NL",
    "NZ",
    "TR",
    "US",
  ];
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed">Search By Nationality:</label>
        <Container>
          {natList.map((list) => {
            return (
              <div key={list}>
                <button
                  type="submit"
                  onClick={props.handleBtnClick}
                  value={list}
                  className="btn btn-primary"
                >
                  {list}
                </button>
              </div>
            );
          })}
        </Container>
      </div>
    </form>
  );
}

export default SearchForm;
