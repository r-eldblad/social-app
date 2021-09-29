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
			<Navbar />

			<Switch>
				<LoginContext.Provider value={{ token, setToken }}>
					<Route path="/profile">
						<ProfilePage />
					</Route>
					<Route path="/login">
						<LoginPage />
					</Route>
					<Route path="/register">
						<RegisterPage />
					</Route>
				</LoginContext.Provider>
			</Switch>
		</div>
	);
}

export default App;
