import React from "react";
import Wrapper from "./Wrapper";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-[var(--color-1)] overflow-hidden -mt-[70px]">
      {/* Background Image Layer */}
      <div
        style={{
          backgroundImage:
            "url('https://execor.vamtam.com/wp-content/uploads/2025/04/GettyImages-1364777011_edit.png')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "top center",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: "none",
          mixBlendMode: "overlay",
        }}
      />

      {/* Main Content */}
      <Wrapper>
        <div className="relative z-[2] flex flex-row items-center justify-between mt-24 gap-8">
          {/* Left Side - Text */}
          <div className="flex-1 flex flex-col bottom-0 justify-end w-3/5 h-full gap-8 mt-40">
            <h1
              className="text-[var(--color-4)] text-[3.8rem] font-bold leading-[1]"
              style={{ fontFamily: "var(--primary-font-family)" }}
            >
              Тransforming Businesses for a{" "}
              <span className="text-[var(--color-2)]">Stronger Future</span>.
            </h1>
            <h4 style={{ fontFamily: "var(--secondary-font-family)" }} className="text-lg">
              Guiding businesses at every stage toward strategic success.
            </h4>
            <div>
              <Button
                label="Book A Free Strategy Call"
                type="primary"
                icon={<ArrowRight strokeWidth={1.25} size={16} />}
              />
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex h-full items-end justify-center w-2/5">
            <img
              src="https://execor.vamtam.com/wp-content/uploads/2025/03/GettyImages-75546129.jpg"
              alt="Hero"
              className="h-[610px] object-cover rounded-md"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
