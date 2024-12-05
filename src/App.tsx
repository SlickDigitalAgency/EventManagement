import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, startTransition } from "react";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Process from "./components/Process";
import ProductShowcase from "./components/ProductShowcase";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

// Pages
import Portfolio from "./pages/Portfolio";
import ServicesPage from "./pages/Services";
import Events from "./pages/Events";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/AboutPage";

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Features />
    <Process />
    <ProductShowcase />
    <Services />
    <Stats />
    <Testimonials />
    <Pricing />
    <CTA />
    <Contact />
  </>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use the correct type for the timer in the browser environment
    let timer: ReturnType<typeof setTimeout>;

    startTransition(() => {
      timer = setTimeout(() => {
        setLoading(false); // Update the loading state after 2 seconds
      }, 2000);
    });

    // Cleanup the timeout when the component unmounts or re-renders
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <div className="bg-black text-white overflow-hidden">
            {" "}
            {/* Prevent horizontal scroll */}
            <Navbar />
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/events" element={<Events />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </motion.main>
            <Footer />
            <ScrollToTop />
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
};

export default App;
