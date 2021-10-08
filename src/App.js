import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
// Component imports
import Navbar from "./components/navbar/Navbar";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import UsersListPage from "./pages/UsersListPage/UsersListPage";
import UsersPage from "./pages/UsersPage/UsersPage";

// Context import(s)
import { LoginContext } from "./contexts/LoginContext";
import { UserContext } from "./contexts/UserContext";
import { UserListContext } from "./contexts/UserListContext";

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState();
  const [userList, setUserList] = useState([]);
  return (
    <div>
      <LoginContext.Provider value={{ token, setToken }}>
        <UserContext.Provider value={{ user, setUser }}>
          <UserListContext.Provider value={{ userList, setUserList }}>
            <Navbar />
            <Switch>
              <Route path="/profile">
                <ProfilePage />
              </Route>
              <Route path="/users">
                <UsersListPage />
              </Route>
              <Route path="/user/:id">
                <UsersPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/register">
                <RegisterPage />
              </Route>
            </Switch>
          </UserListContext.Provider>
        </UserContext.Provider>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
