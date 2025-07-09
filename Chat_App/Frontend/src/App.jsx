import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import Chat from "./pages/Chat";
// import Group from "./pages/Group";
// import About from "./pages/About";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Group = lazy(() => import("./pages/Group"));

const user = true;
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/group/:groupId" element={<Group />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route element={<ProtectRoute user={!user} redirect="/" />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
