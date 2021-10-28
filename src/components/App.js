import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../store";
import { Main } from "./pages";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
