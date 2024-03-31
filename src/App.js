import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Upload from "./pages/Upload/Upload";
import SignUp from "./pages/signup/signup";
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar"

function App() {
  return (
    <div>
      <Router>
        <div className="app-container">
          <Sidebar/>
          <div className="app-main">

            <Header />
            <div className="app-body">
              <Routes>
                <Route path="*" element={<div></div>} />
                <Route path="/" element={<div></div>} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/locations" element={<div></div>} />
                <Route path="/profile" element={<div></div>} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </div>
         
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
