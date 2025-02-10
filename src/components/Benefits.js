import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constant";
import Arrow from "../assets/svg/Arrow";
import GradientLight from "./design/Benefits";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-cover bg-center md:max-w-[24rem] h-[300px]"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h2 mb-5">{item.title}</h5>
                <p>{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase">
                    Explore More
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
