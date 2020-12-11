import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./pages/login/login.jsx"
import Registry from "./pages/registry/registry.jsx"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/registry" component={Registry}/>
      </Switch>
    </Router>
  );
}

export default App;
