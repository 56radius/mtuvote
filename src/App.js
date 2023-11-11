import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/HomeScreen";
import PresidentScreen from "./components/PresidentScreen";
import VicePresidentScreen from "./components/VicePresidentScreen";

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
            path="/"
            element={showSplash ? <SplashScreen /> : <LoginScreen />}
          />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/1" element={<PresidentScreen />} />
          <Route path="/2" element={<VicePresidentScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
