import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/main.css";
import { useState } from "react";
import { useEffect } from "react";
import { Navbar } from "../subcomponents/navbar";

import { Footer } from "../subcomponents/footer";
import { Hero } from "../subcomponents/hero";
import { BelowHero } from "../subcomponents/below-hero";
import { Process } from "../subcomponents/process";
import { About } from "../subcomponents/about";
import { Features } from "../subcomponents/features";
import { Testimonial } from "../subcomponents/testimonial";
import { OtherQuestions } from "../subcomponents/otherQues";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isOpen, setIsopen] = useState(false);

  const navigate = useNavigate();
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <BelowHero></BelowHero>
      <Process></Process>
      <About></About>

      <Features></Features>
      <Testimonial></Testimonial>
      <OtherQuestions></OtherQuestions>

      <Footer></Footer>
    </div>
  );
};

export default Main;
