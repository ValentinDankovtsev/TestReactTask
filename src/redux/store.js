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

export let store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
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

// let state2 = {
//   users: {
//     admin: {
//       tasks:[{ task: "name", description: "description", date: "date" }],
//     },
//     ser2: {
//       tasks:[{ task: "name", description: "description", date: "date" }],
//     },
//   },
//   isAuth:false
// };

