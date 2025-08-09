import React from "react";
import GetStarted from "../components/auth/GetStarted";
import watermark from "../assets/bg-img.png"; // Main background image
import bgImg from "../assets/hero-img.png"; // Main background image
import SEOHelmet from "../engine/SEOHelmet";

const Registration = () => {
  return (
    <div
      className="relative w-screen h-screen flex justify-center items-center"
      style={{
        // backgroundImage: `url(${bgImg})`,
        backgroundImage: "https://res.cloudinary.com/dqgwwmbvs/image/upload/v1754706593/bg-img_lsosbq.png",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
    <SEOHelmet title="Get Started"/>
      {/* Watermark Image */}
      <div
        className="absolute inset-0"
        style={{
          // backgroundImage: `url(${watermark})`,
          backgroundImage: "https://res.cloudinary.com/dqgwwmbvs/image/upload/v1754706606/hero-img_bjwusi.png",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Adjust watermark size
          opacity: 0.5, // Adjust transparency for watermark effect
          backgroundPosition: "center", // Adjust watermark position
          pointerEvents: "none", // Ensures it doesn't interfere with clicks
        }}
      ></div>

      <GetStarted />
    </div>
  );
};

export default Registration;
