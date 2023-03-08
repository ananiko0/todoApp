import { useContext } from "react";
import { Route, Routes, useLocation, Navigate, Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { SliderContextProvider } from "./store/SliderContext";
import AuthContext from "./store/AuthContext";

import Welcome from "./pages/Welcome";
import StickyWall from "./pages/StickyWall";
import Today from "./pages/Today";
import SideBar from "./components/sidebar/SideBar";
import Settings from "./pages/Settings";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import ForgotPass from "./components/Auth/ForgotPass";
import Upcoming from "./pages/Upcoming";
import WelcomeText from "./components/welcome/WelcomeText";
import List from "./pages/List";

import "./App.css";
import Completed from "./pages/Completed";
import Trash from "./pages/Trash";
import AllTasks from "./pages/AllTasks";

function App() {
  //get location and login context
  const location = useLocation();
  const { isLoggedIn } = useContext(AuthContext);

  //navigate according to login status
  const protectRoute = (boolean, opt1, opt2) => {
    const element = boolean ? opt1 : <Navigate to={`${opt2}`} />;
    return element;
  };

  return (
    <SliderContextProvider>
      <div className={"App"} id="App">
        {isLoggedIn && <SideBar />}
        <main>
          <Routes location={location} key={location.pathname}>
            <Route
              element={protectRoute(!isLoggedIn, <Welcome />, "/me/today")}
              path="/welcome"
            >
              <Route element={<WelcomeText />} exact path="" />
              <Route element={<SignIn />} path="sign-in" />
              <Route element={<SignUp />} path="sign-up" />
              <Route element={<ForgotPass />} path="forgot-password" />
            </Route>

            <Route
              element={protectRoute(isLoggedIn, <Outlet />, "/welcome")}
              // element={<Outlet />}
              path="/me"
            >
              <Route element={<Today />} path="today" />
              <Route element={<StickyWall />} path="sticky-wall" />
              <Route element={<Settings />} path="settings" />
              <Route element={<Upcoming />} path="upcoming" />
              <Route element={<List />} path="lists/:listName" />
              <Route element={<Completed />} path="completed" />
              <Route element={<Trash />} path="trash" />
              <Route element={<AllTasks />} path="all-tasks" />
            </Route>
          </Routes>
        </main>
      </div>
    </SliderContextProvider>
  );
}

export default App;
