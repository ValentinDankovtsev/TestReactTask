
const ADD_USER_TYPE='ADD_USER_TYPE';
const UPDATE_USERNAME_TYPE = 'UPDATE_USERNAME_TYPE';


export const addUserActionCreator = () => {
    return {
      type: ADD_USER_TYPE,
    };
  };


  export const updateUserNameActionCreator = (text) => {
    return {
      type: UPDATE_USERNAME_TYPE,
      value: text,
    };
  };

const initialState = {
    userName:'Inache',
    isAuth:false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {

        case  UPDATE_USERNAME_TYPE :
            return {
                ...state,
                userName: action.value,
              };
      
        case ADD_USER_TYPE:
            return {
              userName: state.userName,
              isAuth:true
          } 
            
      default:
        return state;
    }
  };
  
  export default loginReducer;