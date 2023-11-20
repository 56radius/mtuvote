import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import RegisterScreen from "./components/RegisterScreen";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/HomeScreen";
import PresidentScreen from "./components/PresidentScreen";
import VicePresidentScreen from "./components/VicePresidentScreen";
import FinancialSecretaryScreen from "./components/FinancialSecretaryScreen";
import GeneralSecretaryScreen from "./components/GeneralSecretaryScreen";
import AssistantGeneralSecretaryScreen from "./components/AssistantGeneralSecretaryScreen";
import PROScreen from "./components/PROScreen";
import LibrarianScreen from "./components/LibrarianScreen";
import AssistantLibrarianScreen from "./components/AssistantLibrarianScreen";
import SocialDirectorScreen from "./components/SocialDirectorScreen";
import SportDirectorScreen from "./components/SportDirectorScreen";

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
            element={showSplash ? <SplashScreen /> : <RegisterScreen />}
          />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/1" element={<PresidentScreen />} />
          <Route path="/2" element={<VicePresidentScreen />} />
          <Route path="/3" element={<FinancialSecretaryScreen />} />
          <Route path="/4" element={<GeneralSecretaryScreen />} />
          <Route path="/5" element={<AssistantGeneralSecretaryScreen />} />
          <Route path="/6" element={<PROScreen />} />
          <Route path="/7" element={<LibrarianScreen />} />
          <Route path="/8" element={<AssistantLibrarianScreen />} />
          <Route path="/9" element={<SocialDirectorScreen />} />
          <Route path="/10" element={<SportDirectorScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
