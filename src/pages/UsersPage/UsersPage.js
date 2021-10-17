import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { UserContext } from "../../contexts/UserContext";
import { PostsContext } from "../../contexts/PostsContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const UsersPage = () => {
  const { id } = useParams();
  const { user, setUser } = useContext(UserContext);
  const { token } = useContext(LoginContext);
  const { posts, setPosts } = useContext(PostsContext);
  const [message, setMessage] = useState("");
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/profile/${id}`, {
        headers: { "auth-token": token },
      })
      .then((response) => {
        setUser(response.data);
        return axios
          .get("http://localhost:8000/api/posts/" + response.data._id, {
            headers: { "auth-token": token },
          })
          .then((response) => {
            setPosts(response);
          });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(user);
  console.log(posts);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:8000/api/users", {
        headers: { "auth-token": token },
      })
      .then((response) => {
        setCurrentUser(response.data);
        console.log(currentUser);
      });

    console.log(id);
    const post = {
      userId: id,
      senderId: currentUser._id,
      senderName: currentUser.name,
      message,
    };

    console.log(user);
    axios
      .post("http://localhost:8000/api/posts/create", post)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (user && posts.data) {
    return (
      <div>
        <h1 className="text-4xl my-7 text-center font-bold">Profile</h1>
        <h2 className="text-3xl my-7 text-center">{user.name}</h2>
        <h3 className="text-2xl my-7 font-bold text-center">{user.email}</h3>

        <form
          className="container mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Message
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              type="text"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            ></input>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Message
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                From
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {posts.data.map(function (item) {
              return (
                <tr key={item._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.message}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.senderName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.createdAt}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default UsersPage;
