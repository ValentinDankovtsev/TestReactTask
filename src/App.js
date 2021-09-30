import {BrowserRouter,Route} from 'react-router-dom'
import  Tasks  from './components/Tasks/Tasks';
import AddTaskContainer from './components/AddTask/addTaskConatiner'
import AddTask from './components/AddTask/AddTask';
import {store} from './redux/store';


function App(props) {
  return (
    <BrowserRouter>
    <Route exact path="/" render={() => <Tasks state={store.getState()} />} />
    <Route path="/addtask" render={() => <AddTaskContainer/>} />
    </BrowserRouter>
  );
}

export default App;
