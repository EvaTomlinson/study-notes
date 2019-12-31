class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  clickHandler() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.clickHandler();
          }}
        >
          push me
        </button>
        <p>click count: {this.state.counter}</p>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Clicker />, document.getElementById("click-counter"));
