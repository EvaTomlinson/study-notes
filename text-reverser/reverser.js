class Reverser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };

    this.reverseString = this.reverseString.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  reverseString(string) {
    const array = string.split("");
    const reversedArray = array.reverse();
    const reversedString = reversedArray.join("");
    // this.setState({ value: string.target.text });
    return reversedString;
  }

  reversedText() {
    return this.reverseString(this.state.text);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            Text:
            <input
              type="text"
              text={this.state.text}
              onChange={this.handleChange}
              // onChange={(event) => this.handleChange(event)}

            />
          </label>
          <p>reversed text: {this.reversedText()}</p>
        </form>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Reverser />, document.getElementById("text-reverser"));