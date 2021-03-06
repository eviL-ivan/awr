import React, { Component } from "react";

import ReportInformationContainer from "./ReportInformationContainer";
import Drawer from "material-ui/Drawer";
import Slide from "material-ui/transitions/Slide";

class ReportInformationWindow extends Component {
  render() {
    const { data, toggleInformationWindow } = this.props;
    return (
      <Drawer
        tabIndex={0}
        open={data}
        anchor="right"
        role="button"
        onKeyDown={toggleInformationWindow}
        transitionDuration={200}
        variant={"persistent"}
      >
        <div style={{ width: "800px" }}>
          {data && <ReportInformationContainer data={data} />}
        </div>
      </Drawer>
    );
  }
}

export default ReportInformationWindow;

function Transition(props) {
  return <Slide direction="left" {...props} />;
}
