import React, { Component } from "react";
import withRouter from "../routing/wrapRoutingClass/withNavigation";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";

class EntryApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SideBar />
      </div>
    );
  }
}

export default withRouter(EntryApp);
