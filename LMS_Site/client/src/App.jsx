import { LoginAndSignUp } from "./pages/LoginAndSignUp";
import { MainLayout } from "./layout/MainLayout";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import HeroSection from "./components/student/HeroSection";
import Courses from "./components/student/Courses";
import MyLearning from "./components/student/MyLearning";
import { Profile } from "./components/student/Profile";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Courses />
          </>
        ),
      },
      {
        path: "login",
        element: <LoginAndSignUp />,
      },
      {
        path: "my-learning",
        element: <MyLearning />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
function App() {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;
