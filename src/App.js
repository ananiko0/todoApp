import { Route, Routes, useLocation } from "react-router-dom";

import { SliderContextProvider } from "./store/SliderContext";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";
import StickyWall from "./pages/StickyWall";
import Today from "./pages/Today";
import SideBar from "./components/sidebar/SideBar";
import Settings from "./pages/Settings";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <SliderContextProvider>
      <div className={"App"} id="App">
        <SideBar />
        <main>
          <Routes location={location} key={location.pathname}>
            <Route element={<Welcome />} path="/welcome" />
            <Route element={<Main />} path="/" />
            <Route element={<StickyWall />} path="/sticky-wall" />
            <Route element={<Today />} path="/today" />
            <Route element={<Settings />} path="/settings" />
          </Routes>
        </main>
      </div>
    </SliderContextProvider>
  );
}

export default App;
