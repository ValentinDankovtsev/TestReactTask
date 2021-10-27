import {HashRouter,Route} from 'react-router-dom';
import LoginContainer from './components/Autorization/AutorizationContainer';
import AddTaskContainer from './components/AddTask/AddTaskConatiner';
import TasksContainer from './components/Tasks/TasksContainer';
import {store} from './redux/store';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
    <Route exact path="/" render={()=> <LoginContainer state={store.getState()}/>} />
    <Route path="/tasks" render={() => <TasksContainer state={store.getState()}/>} />
    <Route path="/addtask" render={() => <AddTaskContainer />} />
    </HashRouter>
  );
}

export default App;
