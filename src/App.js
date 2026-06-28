// App.js
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Venue from "./pages/Venue";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Menu from "./pages/Menu"; // Add this import
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import emailjs from '@emailjs/browser';

function App() {
  useEffect(() => {
    emailjs.init('8IfMH-tJ6Z8Kp9kE5');
  }, []);

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/menu" element={<Menu />} /> {/* Add this route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;