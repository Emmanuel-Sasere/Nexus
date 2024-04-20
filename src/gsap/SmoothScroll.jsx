import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";

const SmoothScroll = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.04, duration: 0.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
