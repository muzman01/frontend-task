import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../views/Login";

export default function LoggedInRouters() {
  const { user } = useSelector((state) => ({ ...state }));
  return user ? <Outlet />:<Login />
}