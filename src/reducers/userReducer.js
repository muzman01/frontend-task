import Cookies from "js-cookie";
export function userReducer(
  state = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null,
  action,
  cardData,

) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return null;
    case "VERIFY":
      return { ...state, verified: action.payload };
    case "UPDATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}