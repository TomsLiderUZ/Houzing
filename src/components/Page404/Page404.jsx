import React from "react";
import "./style.css";
import Footer from "../Footer/Index.jsx";

function Page404() {
  return (
    <div className="Page404_Wrapper">
      <div className="Page404_ContentWrapper">
        <div className="Page404_ContentWallWrapper">
          <div className="Page404_ContentWallCenterTxets">
            <div className="Page404_ContentTextNumebr">404</div>
            <div className="Page404_ContentTextLorem">Not Found</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page404;
