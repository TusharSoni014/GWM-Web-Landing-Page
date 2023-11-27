import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Information from "./components/Information";
import Social from "./components/Social";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="__app">
      <Header />
      <Hero />
      <Features />
      <Information />
      <Social />
      <Newsletter />
      <Footer/>
    </div>
  );
}

export default App;
