import { useContext, useEffect } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { UserListContext } from "../../contexts/UserListContext";
import axios from "axios";
import { Link } from "react-router-dom";

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

  return (
    <>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              E-mail
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Registered at
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userList.map(function (data) {
            return (
              <tr key={data._id}>
                <td className="px-6 py-4 whitespace-nowrap">{data.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{data.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {data.createdAt}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`/user/${data._id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full uppercase"
                  >
                    Visit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UsersList;
