import {BrowserRouter,Route} from 'react-router-dom';
import LoginContainer from './components/Autorization/AutorizationContainer';
import AddTaskContainer from './components/AddTask/AddTaskConatiner';
import TasksContainer from './components/Tasks/TasksContainer';
import {store} from './redux/store';

function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" render={()=> <LoginContainer/>} />
    <Route path="/tasks" render={() => <TasksContainer state={store.getState()}/>} />
    <Route path="/addtask" render={() => <AddTaskContainer />} />
    </BrowserRouter>
  );
}

export default App;
