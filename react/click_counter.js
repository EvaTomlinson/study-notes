class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  render() {
    return (
      <React.Fragment>
        <p>Hello! This is a click counter!</p>
        <button
          onClick={() => {
            this.handleIncrementClick();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.handleDecrementClick();
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            this.handleResetClick();
          }}
        >
          reset
        </button>
        <p>Click count is: {this.state.counter}</p>
      </React.Fragment>
    );
    <p>Click count: {this.state.counter} </p>;
  }
  handleIncrementClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  handleDecrementClick() {
    this.setState({
      counter: this.state.counter - 1
    });
  }
  handleResetClick() {
    this.setState({
      counter: 0
    });
  }
}

ReactDOM.render(<Counter />, document.getElementById("click-counter"));
