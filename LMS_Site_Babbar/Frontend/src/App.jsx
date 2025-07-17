import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Common/Navbar";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Error from "./Pages/Error";

function App() {
  return (
    <div className=" bg-richblack-900 ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
