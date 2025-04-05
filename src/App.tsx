/* import { About } from "./components/About"; */
/* import { Cta } from "./components/Cta"; */
import { FAQ } from "./components/FAQ";
/* import { Features } from "./components/Features"; */
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
/* import { HowItWorks } from "./components/HowItWorks"; */
import { Navbar } from "./components/Navbar";
import { ContactUs } from "./components/ContactUs";
/* import { Pricing } from "./components/Pricing"; */
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
/* import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials"; */
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About /> */}
      {/* <HowItWorks /> */}
      {/* <Features /> */}
      <Services />
      {/* <Cta /> */}
      {/* <Testimonials /> */}
      {/* <Team /> */}
      {/* <Pricing /> */}
      <ContactUs />
      <FAQ />
      <Sponsors />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
