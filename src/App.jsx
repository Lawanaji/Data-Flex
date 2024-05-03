import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
// import HeroSection from "./components/Hero/HeroSection";
// import Feartures from "./components/features/Feartures";
// import Navbar from "./components/navigation/Navbar";
// import Pricing from "./components/pricing/Pricing";
// import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes >
          <Route path="/" element={<Layout> <Home /> </Layout>} />
          {/* <Route path="/features" element={<Feartures />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hero" element={<HeroSection />} /> */}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
