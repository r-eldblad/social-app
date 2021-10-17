import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import { Redirect } from "react-router";

// Component/page imports
import Navbar from "./components/navbar/Navbar";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import UsersListPage from "./pages/UsersListPage/UsersListPage";
import UsersPage from "./pages/UsersPage/UsersPage";

// Context imports
import { LoginContext } from "./contexts/LoginContext";
import { UserContext } from "./contexts/UserContext";
import { UserListContext } from "./contexts/UserListContext";
import { PostsContext } from "./contexts/PostsContext";
import Welcome from "./components/welcome/Welcome";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState([null]);
  const [userList, setUserList] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  return (
    <div>
      <LoginContext.Provider value={{ token, setToken }}>
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
          <UserContext.Provider value={{ user, setUser }}>
            <UserListContext.Provider value={{ userList, setUserList }}>
              <PostsContext.Provider value={{ posts, setPosts }}>
                <Navbar />
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/welcome" />
                  </Route>
                  <Route path="/welcome">
                    <Welcome />
                  </Route>
                  <Route path="/profile">
                    <ProfilePage />
                  </Route>
                  <Route path="/users">
                    <UsersListPage />
                  </Route>
                  <Route path="/user/:id">
                    <UsersPage />
                  </Route>
                  <Route path="/profile/:id">
                    <ProfilePage />
                  </Route>
                  <Route path="/login">
                    <LoginPage />
                  </Route>
                  <Route path="/register">
                    <RegisterPage />
                  </Route>
                </Switch>
              </PostsContext.Provider>
            </UserListContext.Provider>
          </UserContext.Provider>
        </CurrentUserContext.Provider>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
