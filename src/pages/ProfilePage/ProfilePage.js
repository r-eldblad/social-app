import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";

const ProfilePage = () => {
	const { token } = useContext(LoginContext);
	return (
		<div>
			<h1 className="text-4xl my-7 text-center">{token}</h1>
		</div>
	);
};

export default ProfilePage;
