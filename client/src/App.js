import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {


  return (
    <BrowserRouter>
      <div>
      
        <Routes>
         
          <Route
            path="/login"
            element={ <Login />}
          />
        
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;