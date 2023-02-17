import { Route, Routes, useLocation } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Main from "./pages/Main";
import StickyWall from "./pages/StickyWall";
import SideBar from "./components/sidebar/SideBar";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div className={"App"}>
      <SideBar />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route element={<Welcome />} path="/welcome" />
          <Route element={<Main />} path="/" />
          <Route element={<StickyWall />} path="/sticky-wall" />
        </Routes>
      </main>
    </div>
  );
}

export default App;
