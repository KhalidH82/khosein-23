// components/AnimatedElement.js
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const AnimatedElement = ({ animationType, children }) => (
  <ScrollAnimation animateIn={animationType}>{children}</ScrollAnimation>
);

export default AnimatedElement;
