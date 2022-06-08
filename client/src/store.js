import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { authUserReducer } from "./reducers/authRedcuers";

const reducer = combineReducers({
  userDetails: authUserReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
