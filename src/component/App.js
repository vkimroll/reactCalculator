import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";
// Import Provider
import { Provider } from "@rollbar/react";

// Add our rollbar set up. Add correct access token

const rollbarConfig = {
  accessToken: "3ce29020218a43d3804c355b4f45252a",
    captureUncaught: true,
    captureUnhandledRejections: true,
}
export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    // if(this.state.next == "67"){
    //   return new Error ("That value is wrong!");
    // }
    return (
      // Modify the Provider inside the render statement with the rollbar config
      <Provider config={rollbarConfig}>
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
       </Provider>
    );
  }
}
