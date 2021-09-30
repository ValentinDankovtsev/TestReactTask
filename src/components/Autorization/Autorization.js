import React from "react";
import { store } from "../../redux/store";
import { logIn } from "../services/logIn";
import { Redirect,Link,} from 'react-router-dom';
import { useHistory } from 'react-router-dom'


const Autoruzation = (props) => {
// debugger;
const history = useHistory()



    const changeUserNameValue = (e) => {
        const text = e.target.value;
        props.updateUserName(text)
    }
    const addUserNameAndPassword = () => {
        props.addLogin();
    }

    const handleSubmit = async (event) => {
      
      event.preventDefault();
      const  userName  = props.userName
      await logIn(userName)

      

    // if (isAuth) {
    //   return <Redirect to='/tasks' />;
    // }
      
    };

    console.log(handleSubmit)

    // if(handleSubmit) {
    //   return <Redirect from='/' to='/tasks' />;
    // }
    
    const isAuth  = props.isAuth;

    if(isAuth===true&&props.userName==='Admin') {
      return <Redirect to='/tasks'/>
    }
    return (
      
        <div >
        <form  onSubmit={handleSubmit}>
          <label>Login</label>
          <input  value={props.userName} onChange={changeUserNameValue}/>
          <label>Password</label>
          {/* <input required type='password' name='password'/> */}
          <button  onClick={addUserNameAndPassword}>Sign In</button>
        </form>
      </div>
    )

  
}

export default Autoruzation