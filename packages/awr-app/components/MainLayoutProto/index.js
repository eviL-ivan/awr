// import React, { Component } from "react";
// import { render } from "react-dom";
// import Reboot from "material-ui/Reboot";
// import styled, { ThemeProvider } from "styled-components";
// import { Typography } from "material-ui";
// import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
// //import "typeface-roboto";
// //import "./style.css";
// import { theme } from "./Theme.js";

// import JssProvider from "react-jss/lib/JssProvider";
// import { create } from "jss";
// import { createGenerateClassName, jssPreset } from "material-ui/styles";
// import Layout from "./Layout";

// import Header from "components/Layout/Header";
// import Sidebar from "components/Layout/Sidebar";
// import Content from "./Reports/Content";

// class App extends Component {
//   state = {
//     expanded: false,
//     organization: "all",
//     directions: {}
//   };

//   changeOrganization = organization => {
//     this.setState({
//       organization: organization.target.value
//     });
//   };

//   toggleSidebar = () => {
//     this.setState(state => ({
//       expanded: !state.expanded
//     }));
//   };

//   render() {
//     const { expanded, organization, directions } = this.props;

//     return (
//       <Content
//         sidebarExpanded={expanded}
//         organization={organization}
//         directions={directions}
//       />
//     );
//   }
// }

// const RowContainer = styled.div`
//   position: absolute;
//   flex-direction: row;
//   flex: 1;
//   display: flex;
//   height: 100%;
//   width: 100%;
// `;
// export default App;

import React from "react";
import styled from "styled-components";
import Paper from "material-ui/Paper";
import Icon from "material-ui/Icon";
import DoneIcon from "material-ui-icons/Person";
import Done from "material-ui-icons/Done";
import Clear from "material-ui-icons/Clear";
import reports from "./Reports/reportsData";
import ReportItem from "./Reports/ReportItem";

class Documents extends React.Component {
  state = {};

  render() {
    const { className, organization, directions } = this.props;
    console.log("reports", reports);
    return (
      <div className={className}>
        {reports.map(({ data, records }) => (
          <ReportItem
            key={Math.random()}
            data={data}
            records={records}
            organization={organization}
            directions={directions}
          />
        ))}
      </div>
    );
  }
}

export default styled(Documents)`
  display: flex;
  height: 100%;
  width: 100%;
`;

// <img src="https://image.prntscr.com/image/jgTsbJzGT8COvf2-4afswQ.png"/>
