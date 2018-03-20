import React, { Component, Fragment } from "react";

class ReportInformationContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <p>{this.props.data.organizationTitle}</p>
        <button onClick={() => {}}>button</button>
      </React.Fragment>
    );
  }
}

export default ReportInformationContainer;
