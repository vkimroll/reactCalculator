import React from "react";
import PropTypes from "prop-types";
// Import errorBoundry
import { ErrorBoundary } from "@rollbar/react";

import "./Display.css";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    // Add our conditional error logic 

    
    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}
