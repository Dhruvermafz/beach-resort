export const fetchUser = () => async (dispatch) => {
  dispatch({ type: "FETCH_USER_REQUEST" });
  try {
    const response = await fetch("/api/user"); // Adjust the API endpoint as needed
    const data = await response.json();
    dispatch({ type: "FETCH_USER_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_USER_FAILURE", payload: error.message });
  }
};
