import {BrowserRouter,Route} from 'react-router-dom';
import Autorization from './components/Autorization/Autorization';
import UserContainer from './components/Autorization/AutorizationContainer';
import  Tasks  from './components/Tasks/Tasks';
import AddTaskContainer from './components/AddTask/addTaskConatiner';
import TasksContainer from './components/Tasks/TasksContainer';
import AddTask from './components/AddTask/AddTask';
import {store} from './redux/store';
import Athorization from './components/hoc/Auto'

function App(props) {
  const Cooomponent = Athorization( UserContainer)
  const Cooomponent2 = Athorization(Tasks)
  
  return (
    <BrowserRouter>
    <Route exact path="/" render={()=> <UserContainer/>} />
    <Route path="/tasks" render={() => <TasksContainer state={store.getState()}/>} />
    <Route path="/addtask" render={() => <AddTaskContainer />} />
    </BrowserRouter>
  );
}

export default App;
