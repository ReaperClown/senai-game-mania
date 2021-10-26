//import Dashboard from "pages/dashboard";
import Home from "pages/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;