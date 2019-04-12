import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Do a Ajax call to get new data from server
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement = id => {
  //     this.setState({ value: this.state.value + 1 });
  //   };
  //   handleDecrement = id => {
  //     this.setState({ value: this.state.value - 1 });
  //   };

  renderTags() {
    let classes = this.getBadgeClasses();

    return (
      <div className="row">
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
          disabled={!this.props.counter.value}
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          x
        </button>
      </div>
    );
  }

  render() {
    return <React.Fragment>{this.renderTags()}</React.Fragment>;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
