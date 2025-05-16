import React from "react";
import Wrapper from "./Wrapper";
import { CircleCheckBig } from "lucide-react";

const SetsApart = () => {
  return (
    <div
      className="bg-gradient-to-r bg-white from-[var(--color-2)] to-white text-[var(--color-6)] text-md font-normal"
      style={{ fontFamily: "var(--secondary-font-family)" }}
    >
      <Wrapper>
        <div className="flex items-center justify-between h-[90px]">
          <div>What Sets Us Apart</div>
          <div className="flex gap-16 items-center justify-between">
            <span className="flex items-center gap-4">
              <CircleCheckBig strokeWidth={1.25} />
              Data-Driven Strategies
            </span>
            <span className="flex items-center gap-4">
              <CircleCheckBig strokeWidth={1.25} />
              Proven Results
            </span>
            <span className="flex items-center gap-4">
              <CircleCheckBig strokeWidth={1.25} />
              Scalable Growth
            </span>
            <span className="flex items-center gap-4">
              <CircleCheckBig strokeWidth={1.25} />
              Trusted Expertise
            </span>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SetsApart;
