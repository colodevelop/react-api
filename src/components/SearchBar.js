import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onInputChange = event => {
    const { value } = event.target;
    this.setState({ term: value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
    //Make sure we call
    //Callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
