import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Statistics from "./components/Statistics";
import Projects from "./components/Projects";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Loader isLoading={isLoading} />

        {!isLoading && (
          <>
            <Header />
            <main>
              <Hero />
              <About />
              <Services />
              <Statistics />
              <Projects />
              <Features />
            </main>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
