import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/AuthContext";
import { TasksContextProvider } from "./store/TasksContext";
import { StickyContextProvider } from "./store/StickyContext";
import { ListContextProvider } from "./store/ListContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <StickyContextProvider>
      <ListContextProvider>
        <TasksContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </TasksContextProvider>
      </ListContextProvider>
    </StickyContextProvider>
  </AuthContextProvider>
);
