import { Routes, Route } from "react-router-dom";
import AdminPage from "./adminScenes/admin";
import SignIn from "./page/Login";
import SignUp from "./page/Register";

function App() {
  
  return (
    <Routes>
      <Route path="/login" element={<SignIn/>}></Route>
      <Route exact path="/register" element={<SignUp/>}></Route>
      <Route path="/admin/*" element={<AdminPage/>}></Route>
    </Routes>
  );
}

export default App;
