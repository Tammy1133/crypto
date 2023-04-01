import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import "react-typist/dist/Typist.css";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import "./css/main.css";
import { setBlogItems } from "./redux/actions/blogactions";

import { setdevotions } from "./redux/actions/devotionactions";

// import Error from "./components/error";

const Main = React.lazy(() => import("./components/main"));
const About = React.lazy(() => import("./components/about"));
const Contact = React.lazy(() => import("./components/contact"));

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState("");

  return loading ? (
    <div className="h-screen flex justify-center items-center">
      <div class="spinner-border text-green-400" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <div>
      <Suspense
        fallback={
          <div>
            <div class="center">
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
            </div>
          </div>
        }
      >
        <Routes>
          <Route element={<Main></Main>} path="/"></Route>
          <Route element={<About></About>} path="/about"></Route>
          <Route element={<Contact></Contact>} path="/contact"></Route>

          {/* <Route element={<Error></Error>} path="*" exact></Route> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
