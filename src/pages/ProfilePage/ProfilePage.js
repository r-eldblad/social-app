// Contexts imports
import { LoginContext } from "../../contexts/LoginContext";
import { PostsContext } from "../../contexts/PostsContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

// Misc imports
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Page imports

const ProfilePage = () => {
  const { token } = useContext(LoginContext);
  const { posts, setPosts } = useContext(PostsContext);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    axios
      .get("https://social-app-backend-api.herokuapp.com/api/users", {
        headers: { "auth-token": token },
      })
      .then((response) => {
        setCurrentUser(response.data);
        return axios
          .get(
            `https://social-app-backend-api.herokuapp.com/api/posts/${response.data._id}`,
            {
              headers: { "auth-token": token },
            }
          )
          .then((response) => {
            setPosts(response);
          });
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(currentUser);
  console.log(posts);

  const deletePost = (postId) => {
    axios
      .delete(
        `https://social-app-backend-api.herokuapp.com/api/posts/delete/${postId}`,
        {
          headers: { "auth-token": token },
        }
      )
      .then((res) => {
        const del = posts.data.filter((post) => postId !== post._id);
        setPosts(del);
      });
  };

  console.log(posts);

  if (posts.data) {
    return (
      <div>
        <h2 className="text-3xl my-7 text-center">{currentUser.name}</h2>
        <h3 className="text-4xl my-7 text-center font-bold">Posts</h3>
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
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {posts.data.map((item) => {
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
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      to="/"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full uppercase"
                      onClick={() => deletePost(item._id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  return <div></div>;
};

export default ProfilePage;
