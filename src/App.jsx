import React from "react";
import Topbar from "./components/Topbar_logo";

function App() {
  return (
    <header className="top-bar h-[81px] border-b[1px]">
      <div className="nav-content">
        <a href="#">
          <img
            src="https://www.kakaobank.com/static/images/web/logo_black.svg"
            alt=""
          />
        </a>
      </div>
    </header>
  );
}

export default App;
