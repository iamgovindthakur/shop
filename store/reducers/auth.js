import { AUTHENTICATE, LOGOUT, EMAIL } from "../actions/auth";

const initialState = {
  token: null,
  userId: null,
  email: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case EMAIL:
    //   return {
    //     email: action.email,
    //   };
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId,
      };
    case LOGOUT:
      return initialState;
    // case SIGNUP:
    //   return {
    //     token: action.token,
    //     userId: action.userId
    //   };
    default:
      return state;
  }
};
