import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";

import UsersList from "../../components/users-list/UsersList";

const UsersListPage = () => {
  const { token } = useContext(LoginContext);
  if (token) {
    return (
      <div>
        <h1 className="text-4xl my-7 text-center font-bold">Users List</h1>
        <UsersList />
      </div>
    );
  }

  return <div></div>;
};

export default UsersListPage;
