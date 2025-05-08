import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import Arsip from "./Pages/Arsip";
import "./Styles/style.css";
import NotePage from "./Pages/NotePage";
import AddNote from "./Pages/AddNote";
import NotFound from "./Pages/NotFound";


const App = () => {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/arsip"
            element={<Arsip  />}
          />
          <Route
            path="/note/:id"
            element={<NotePage />}
          />
          <Route path="/addNote" element={<AddNote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
