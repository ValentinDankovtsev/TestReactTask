import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import addTaskReducer from "./addTasksReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginReducer from "./loginReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

let reducers = combineReducers({
  tasksPage: addTaskReducer,
  loginPage: loginReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export let persistor = persistStore(store);
