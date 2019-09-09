import React from "react";

import styles from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  toggleSideDrawerHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar menuClicked={this.toggleSideDrawerHandler} />
        <SideDrawer
          showBackdrop={this.state.showSideDrawer}
          closeBackdrop={this.sideDrawerClosedHandler}
        />
        <main className={styles.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}
export default Layout;
