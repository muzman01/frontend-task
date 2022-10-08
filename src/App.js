import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import LoggedInRouters from "./routers/LoggedInRouters";
import NotLoggedRouters from "./routers/NotLoggedRouters";
function App() {
  return     <>
  <Routes>
    <Route element={<LoggedInRouters />}>
      <Route path="/" element={<Home />} exact />
    </Route>
    <Route element={<NotLoggedRouters />}>
      <Route path="/login" element={<Login />} exact />
    </Route>
  </Routes>
</>
}

export default App;
