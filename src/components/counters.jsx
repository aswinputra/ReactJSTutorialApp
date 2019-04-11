import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sn m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter={counter}
            // value={counter.value}
            // id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
