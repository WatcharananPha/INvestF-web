import React from "react";
import Hero from "./containers/Hero";
import HowWeOperate from "./containers/HowWeOperate";
import HowWeWork from "./containers/HowWeWork";
import ContactUs from "./containers/ContactUs";
import Invitation from "./containers/Invitation";
import Footer from "./containers/Footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Hero />
      <HowWeOperate />
      <HowWeWork />
      <ContactUs />
      <Invitation />
      <Footer />
    </React.Fragment>
  );
}

export default App;
