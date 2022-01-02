

export const   initialState = {
     userdata:[],
     user:false,
  };
  export   const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_USER': {
        return { ...state,userdata:[action.user],user:action.verify};
      }
      case 'decrement': {
        return { ...state };
      }
      case 'loading': {
        return { ...state};
      }
      default: {
        return state;
      }
    }
  };
  