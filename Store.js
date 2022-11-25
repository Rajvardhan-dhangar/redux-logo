import { createStore } from "redux";
import Rotedreducer from "./reducers/Rotedreducer";

function configureStore(state = { rotating: true }) {
  return createStore(Rotedreducer,state);
}

export default configureStore;