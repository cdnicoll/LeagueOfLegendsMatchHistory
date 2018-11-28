import React from "react";
import { Input, Button } from "semantic-ui-react";

class SearchBar extends React.Component {
  static defaultProps = {
    loading: false
  }

  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <Input
          icon="search"
          value={this.state.term}
          placeholder="Search..."
          onChange={e => this.setState({ term: e.target.value })}
          style={{"marginRight": "10px"}}
        />
        <Button disabled={!this.state.term} loading={this.props.loading} content="Search" onClick={this.onFormSubmit} />
      </div>
    );
  }
}

export default SearchBar;
