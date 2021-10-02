import { combineReducers, createStore } from "redux";
import addTaskReducer from "./addTasksReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginReducer from "./loginReducer";

let reducers = combineReducers({
  tasksPage: addTaskReducer,
  loginPage: loginReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export let store = createStore(persistedReducer);
console.log(store.getState());

export let persistor = persistStore(store);

// let state = {
//   users: [
//     {
//       Admin: {
//         tasks: [{ task: "name", description: "description", date: "date" }],
//       },
//     },
//     {
//       User2: {
//         tasks: [{ task: "name", description: "description", date: "date" }],
//       },
//     },
//   ],
// };
