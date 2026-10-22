import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Lenis from "lenis";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import School from "@/pages/School";
import Programs from "@/pages/Programs";
import ProgramDetail from "@/pages/ProgramDetail";
import FlightTest from "@/pages/FlightTest";
import Coaching from "@/pages/Coaching";
import Camps from "@/pages/Camps";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Access from "@/pages/Access";
import { Component as ReactComponent } from "react";

class ErrorBoundary extends ReactComponent {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-carbon px-6 text-center">
          <div>
            <p className="font-display text-3xl text-bone">Something went wrong.</p>
            <button
              onClick={() => (window.location.href = "/")}
              className="mt-6 border border-rust px-6 py-3 font-mono text-xs uppercase tracking-label text-bone"
            >
              Back to Flight
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Lenis momentum scrolling + scroll reset on route change (inside Router).
function ScrollManager() {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    lenisRef.current = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollManager />
        <ErrorBoundary>
          <Nav />
          <main id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/school" element={<School />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/:slug" element={<ProgramDetail />} />
              <Route path="/flight-test" element={<FlightTest />} />
              <Route path="/coaching" element={<Coaching />} />
              <Route path="/camps" element={<Camps />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/access" element={<Access />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </ErrorBoundary>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
