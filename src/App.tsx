import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";
import { SignIn } from "./pages/SignIn";
import store from "./store/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
