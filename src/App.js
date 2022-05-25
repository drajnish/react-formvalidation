import React from "react";

import LeftContent from "./component/LeftContent";
import RightContent from "./component/RightContent";
import "./assets/styles/app.scss";

function App() {
  return (
    <section className="main">
      <LeftContent />
      <RightContent />
    </section>
  );
}

export default App;
