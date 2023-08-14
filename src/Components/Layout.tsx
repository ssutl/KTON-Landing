import Navbar from "./Navbar";
import styles from "../../styles/Layout/Layout.module.scss";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Layout = ({ children }: any) => {
  //Quick default layout in order to persist navbar and header on every page

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
