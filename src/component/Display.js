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
// Assign a call back method inside the render function
    return (
    <ErrorBoundary fallbackUI={DisplayError}>
    <DisplayValue {...this.props} />
    </ErrorBoundary> 
    );
  }
}

const DisplayError = () => ( 
  // <-- props passed to fallbackUI component
  <div className="component-display">
  <div>Error</div>
  </div>
);

class DisplayValue extends React.Component {
static propTypes = {
  value: PropTypes.string,
};

render() {
  if(this.props.value == "67"){
    // Error generator
    throw new Error ('That value is wrong!');
  }

return (
 <div className = "component-display">
 <div>{this.props.value}</div>
 </div>
);
}
}
