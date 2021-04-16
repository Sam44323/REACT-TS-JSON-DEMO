import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";

import ListContainer from "./containers/ListContainer";
import Navigation from "./components/Navigation";

const ItemDetails = lazy(() => import("./components/ItemDetail"));

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Suspense fallback={<h1 className="mt-9 text-center">Loading...</h1>}>
        <Switch>
          <Route path="/" exact component={ListContainer} />
          <Route path="/details/:id" component={ItemDetails} />
        </Switch>
      </Suspense>
    </React.Fragment>
  );
};

export default App;
