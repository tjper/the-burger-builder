import React from "react";

import styles from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = props => {
  let classes = [styles.SideDrawer, styles.Close];
  if (props.showBackdrop) {
    classes = [styles.SideDrawer, styles.Open];
  }

  return (
    <React.Fragment>
      <Backdrop show={props.showBackdrop} clicked={props.closeBackdrop} />
      <div className={classes.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
