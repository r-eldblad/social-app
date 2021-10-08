import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { UserContext } from "../../contexts/UserContext";

const UsersPage = () => {
  const { id } = useParams();
  const { user, setUser } = useContext(UserContext);
  const { token } = useContext(LoginContext);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/profile/${id}`, {
        headers: { "auth-token": token },
      })
      .then((response) => {
        setUser(response.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(user);
  if (user) {
    return (
      <div>
        <h1 className="text-4xl my-7 text-center font-bold">Profile</h1>
        <h2 className="text-3xl my-7 text-center">{user.name}</h2>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default UsersPage;
