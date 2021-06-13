import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";
import { SignIn } from "./pages/SignIn";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
