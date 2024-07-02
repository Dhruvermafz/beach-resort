import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import roomReducer from "./reducers/roomReducer";
import userReducer from "./reducers/userReducer";
import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";
// Combine all your reducers
const rootReducer = combineReducers({
  rooms: roomReducer,
  user: userReducer,
  // add more reducers as needed
});

// Create the Redux store with middleware
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
