import React from "react";
import Nav from "./components/NavSlack/Nav";
import Hero from "./components/HeroSlack/Hero";
import Company from "./components/Companies/Company";
import Mainwork from "./components/MainWork/Mainwork";
import Emoji from "./components/EmojiSlack/Emoji";
import Card from "./components/Cards/Card";
import Trial from "./components/Trials/Trial";
import Footer from "./components/Footer/Footer";
import FooterAccordion from "./components/FooterAccordion/FooterAccordion";
import CopyRight from "./components/CopyRight/CopyRight";

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Company />
      <Mainwork />
      <Emoji />
      <Card />
      <Trial />
      <Footer />
      <FooterAccordion />
      <CopyRight />
    </div>
  );
};

export default App;
