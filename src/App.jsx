import NavBar from "./components/NavBar";
import Features from "./containers/Features";
import Footer from "./containers/Footer";
import Hero from "./containers/Hero";
import Highlights from "./containers/Highlights";
import HowItWorks from "./containers/HowItWorks";
import Model from "./containers/Model";

import * as Sentry from "@sentry/react";

function App() {

  return (
    <main className="bg-black">
      <NavBar/>
      <Hero />
      <Highlights/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
  );
}

export default Sentry.withProfiler(App);
