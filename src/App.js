import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/HomeScreen";
import PresidentScreen from "./components/PresidentScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={showSplash ? <SplashScreen /> : <LoginScreen />}
          />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/1" element={<PresidentScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
