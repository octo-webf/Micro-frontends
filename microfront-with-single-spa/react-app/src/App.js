import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
  }

  componentDidMount() {
    window.addEventListener("messageFromAngular", this.handleEvent.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener(
      "messageFromAngular",
      this.handleEvent.bind(this)
    );
  }

  handleEvent(event) {
    console.log("message received!");
    this.setState({
      message: `Message from Angular : ${event.detail.message}`,
    });
    //this.forceUpdate()
  }

  render() {
    return (
      <section>
        <h1>React single-spa works !</h1>
        <p>{this.state.message}</p>
      </section>
    );
  }
}
