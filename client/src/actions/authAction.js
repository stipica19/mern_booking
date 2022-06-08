import axios from "axios";

export const setCurrentUser = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:5000/dashboard", {
    withCredentials: true,
  });
  console.log(data);
  dispatch({
    type: "SET_CURRENT_USER",
    payload: data,
  });
};
export const logoutUser = () => (dispatch) => {
  axios
    .get("http://localhost:5000/auth/logout", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((response) => {
      dispatch({ type: "USER_LOGOUT" });
    });
};
