function Welcome(props) {
  return (
    <React.Fragment>
      <h1>Hello, {props.name}!</h1>
    </React.Fragment>
  );
}

function App() {
  return (
    <div>
      <Welcome name="Stranger!" />
      <Clock locale="en-US" />
    </div>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 100);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const seoulOptions = {
      timeStyle: "full",
      timeZone: "Asia/Seoul"
    };
    const atlantaOptions = {
      timeStyle: "full",
      timeZone: "America/New_York"
    };
    const locale = this.props.locale;
    return (
      <div>
        <br />
        <h1>Hello, world!</h1>
        <h2>
          {this.state.date.toLocaleTimeString(locale, seoulOptions)}
          <img
            className="flag"
            src="../images/south_korean_flag.svg"
            alt="South Korean flag"
            height="30"
          />
        </h2>
        <h2>
          {this.state.date.toLocaleTimeString(locale, atlantaOptions)}
          <img
            className="flag"
            src="../images/american_flag.jpg"
            alt="American flag"
            height="30"
          />
        </h2>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("clock"));
