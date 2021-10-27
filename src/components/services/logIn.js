export const logIn =  (userName, password) => { 
  debugger;
  if ((userName === 'Admin' && password === '12345')||(userName === 'User' && password === 'qwerty')) {
    return "succes";
  }
};


// export const logIn = async (username, password) => (
//   new Promise((resolve, reject) => {
//     if ((username === 'Admin' && password === '12345')||(username === 'User' && password === 'qwerty')) {
//       resolve('succes');
//     } else {
//       reject(new Error('Incorrect username or password.'));
//     }
//   })
// );