import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
