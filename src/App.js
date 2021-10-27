import { BrowserRouter, Route, Router,Switch } from "react-router-dom";
import LoginContainer from "./components/Autorization/AutorizationContainer";
import AddTaskContainer from "./components/AddTask/AddTaskConatiner";
import TasksContainer from "./components/Tasks/TasksContainer";
import { store } from "./redux/store";
// import { Switch } from "antd";

function App() {
  return (
    
      <Switch>
       <Route
        exact
        path="/"
        render={() => <LoginContainer state={store.getState()} />}
      />
      <Route
        path="/tasks"
        render={() => <TasksContainer state={store.getState()} />}
      />
      <Route path="/addtask" render={() => <AddTaskContainer />} />
      </Switch>
     
      
      
    
  );
}

export default App;
