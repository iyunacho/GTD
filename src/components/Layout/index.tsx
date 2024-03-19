import { ReactNode, useState } from "react";
import NavBar from "../NavBar";
import './index.css'; 

const Layout = (props: { children: ReactNode }) => {
  return (
    <div id="page-wrapper">
        <NavBar />
        <div id="content-wrapper">{props.children}</div>
    </div>
  );
};

export default Layout;
