import "./App.css";

import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavigationLinks from "./Pages/MyNavigationLinks";
import Feedback from "./Pages/Feedback";
import HomePage from "./Pages/HomePage";
import Movies from "./Pages/Movies";
import Movies2 from "./Pages/Movies2";
import Webseries from "./Pages/Webseries";
import Webseries2 from "./Pages/Webseries2";
import AboutUs from "./Pages/AboutUs";
import QueryList from "./components/QueryList";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="*" element={<Login />} />
            <Route path="/qu" element={<QueryList />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="fb" element={<Feedback />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/ws" element={<Webseries />} />
            <Route path="/ws2" element={<Webseries2 />} />
            <Route path="/ms" element={<Movies />} />
            <Route path="/ms2" element={<Movies2 />} />
            <Route path="/nav" element={<MyNavigationLinks />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
