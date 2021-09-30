import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
// Component imports
import Navbar from "./components/navbar/Navbar";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

// Context import(s)
import { LoginContext } from "./contexts/LoginContext";
import { UserContext } from "./contexts/UserContext";

function App() {
	const [token, setToken] = useState(null);
	const [user, setUser] = useState();
	return (
		<div>
			<LoginContext.Provider value={{ token, setToken }}>
				<UserContext.Provider value={{ user, setUser }}>
					<Navbar />
					<Switch>
						<Route path="/profile">
							<ProfilePage />
						</Route>
						<Route path="/login">
							<LoginPage />
						</Route>
						<Route path="/register">
							<RegisterPage />
						</Route>
					</Switch>
				</UserContext.Provider>
			</LoginContext.Provider>
		</div>
	);
}

export default App;
