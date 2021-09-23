import "./App.css";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
