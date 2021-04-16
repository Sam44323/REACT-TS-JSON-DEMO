import React from "react";
import "./App.css";

import ListContainer from "./containers/ListContainer";
import Navigation from "./components/Navigation";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navigation />
      <ListContainer />
    </React.Fragment>
  );
};

export default App;
