import React from "react";
//Global Style
import GlobalStyle from "./Components/GlobalStyle";
//Import Pages
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
