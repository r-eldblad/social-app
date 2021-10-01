import { useContext, useEffect } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { UserListContext } from "../../contexts/UserListContext";
import axios from "axios";

const UsersList = () => {
	const { token } = useContext(LoginContext);
	const { userList, setUserList } = useContext(UserListContext);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/users/list", {
				headers: { "auth-token": token },
			})
			.then((response) => {
				setUserList(response.data);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log(userList);

	if (token) {
		return <div>Verifierad</div>;
	} else {
		return <div></div>;
	}
};

export default UsersList;
