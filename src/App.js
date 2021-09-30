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

function App() {
	const [token, setToken] = useState(null);
	return (
		<div>
			<LoginContext.Provider value={{ token, setToken }}>
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
			</LoginContext.Provider>
		</div>
	);
}

export default App;
