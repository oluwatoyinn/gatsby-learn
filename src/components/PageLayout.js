import React from "react";
import Sidebar from "./Sidebar";
// import "../style/global.css";

const PageLayout = ({ children }) => {
  const year = new Date().getFullYear();
  return (
    <div className="container mx-auto md:px-28 h-96 mt-10">
      <Sidebar />
      <div className="mt-10">{children}</div>
      <footer>
        <p>Copyright {year}</p>
      </footer>
    </div>
  );
};

export default PageLayout;
