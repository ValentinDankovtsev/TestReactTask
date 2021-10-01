import { Link,Redirect } from "react-router-dom";
import React from "react";
import { Route } from "react-router";
// import Tasks} from '../Tasks/Tasks';
import { store } from "../../redux/store";
import  {browserHistory}  from 'react-router-dom';

// export const logIn = (userName,password) => (
//     new Promise((resolve, reject) => {
//       if (userName === 'Admin'&& password === 'qwerty') {
//         resolve('выполнено');
//       } else {
//         reject(new Error('Incorrect username or password.'));
//       }
//     })
//   );


  export const logIn = (userName,password) => 
   {
    if (userName === 'Admin'&& password === 'qwerty') {
      return 'successfully'
    } 
   }
      
    
  