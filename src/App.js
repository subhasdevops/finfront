import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/Login";
import NotFound from "./components/Notfound";
import Data from "./components/Data";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/data" component={Data} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
);

export default App;
