export const fetchRooms = () => async (dispatch) => {
  dispatch({ type: "FETCH_ROOMS_REQUEST" });
  try {
    const response = await fetch("/api/rooms"); // Adjust the API endpoint as needed
    const data = await response.json();
    dispatch({ type: "FETCH_ROOMS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_ROOMS_FAILURE", payload: error.message });
  }
};
