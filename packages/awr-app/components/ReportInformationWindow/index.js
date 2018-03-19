import React, { Component } from "react";

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
        <div style={{ width: "750px" }}>
          {data && (
            <div>
              <p>{data.organizationTitle}</p>
              <button onClick={toggleInformationWindow}>button</button>
            </div>
          )}
        </div>
      </Drawer>
    );
  }
}

export default ReportInformationWindow;

function Transition(props) {
  return <Slide direction="left" {...props} />;
}
