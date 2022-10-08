import ACTIONS from "./Actions";

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.DATA:
      return {
        ...state,
        data: action.payload,
      };
   
    default:
      return state;
  }
};

export default reducers;