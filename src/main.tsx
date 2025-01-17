import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Details from "./details.tsx";
import { RecoilRoot } from "recoil";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" Component={App} />
          <Route path="/detail/:id" Component={Details} />
        </Routes>
      </Router>
    </RecoilRoot>
  </StrictMode>
);
