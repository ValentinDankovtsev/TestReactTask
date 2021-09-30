export const logIn = (userName) => (
    new Promise((resolve, reject) => {
      if (userName === 'Admin') {
        resolve();
      } else {
        reject(new Error('Incorrect username or password.'));
      }
    })
  );