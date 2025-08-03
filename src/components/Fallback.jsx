import React, { useEffect, useRef } from "react";
import searcherAnim from "../assets/anim/searcher-anim.json";
import Lottie from "lottie-react";

function Fallback() {
  const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1.5);
    }
  }, []);

  return (
    <main className="w-full h-screen bg-white/80 flex flex-col justify-center items-center">
      <Lottie
        lottieRef={lottieRef}
        className="w-[40%] md:w-[25%]"
        animationData={searcherAnim}
      />
      <h1 className="mt-4 text-xl md:text-2xl font-extrabold text-gray-700">
        Siwes Finder
      </h1>
    </main>
  );
}

export default Fallback;
