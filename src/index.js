import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/AuthContext";
import { TasksContextProvider } from "./store/TasksContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <TasksContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TasksContextProvider>
  </AuthContextProvider>
);
