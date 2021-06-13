import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";
import { SignIn } from "./pages/SignIn";
import store from "./store/store";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./components/AuthProvider";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AuthProvider>
          <Router>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/settings" component={Settings} />
              <Route exact path="/signin" component={SignIn} />
            </Switch>
          </Router>
        </AuthProvider>
      </Provider>
    </div>
  );
};

export default App;
