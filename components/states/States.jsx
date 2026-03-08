import React from 'react';
import './States.css';

/**
 * Define States, a React component of Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states: window.models.states(),
      inputValue: ''
    };
    this.handleChangeBound = event => this.handleChange(event);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  outOfBandJSX(filter) {
    let optionJSX;

    const listItems = this.state.states.filter(state =>
      state.toLowerCase().includes(filter.toLowerCase())
    );

    if (listItems.length === 0) {
      optionJSX = <div>No matching states match filter criteria.</div>;
    }

    for (let i = 0; i < listItems.length; i++) {
      listItems[i] = <li key={i}>{listItems[i]}</li>;
    }

    return (
      <div>
        {optionJSX}
        <ul className="states-list">{listItems}</ul>
      </div>
    );
  }

  render() {
    return (
      <div className="states-container">
        <label htmlFor="stateFilterId">State Filter: </label>

        <input
          id="stateFilterId"
          className="states-input"
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChangeBound}
        />

        <div className="states-filter">
          Current Filter: {this.state.inputValue}
        </div>

        {this.outOfBandJSX(this.state.inputValue)}
      </div>
    );
  }
}

export default States;
