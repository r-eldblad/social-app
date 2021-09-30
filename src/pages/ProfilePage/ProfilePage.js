import { useContext, useEffect } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";

const ProfilePage = () => {
	const { token } = useContext(LoginContext);
	const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/user/profile", {
				headers: { "auth-token": token },
			})
			.then((response) => {
				setUser(response.data);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div>
			<div className="text-4xl my-7 text-center">
				<h1>{user.name}</h1>
			</div>
		</div>
	);
};

export default ProfilePage;
