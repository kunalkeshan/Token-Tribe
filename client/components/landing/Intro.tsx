import React from "react";

const Intro = () => {
  return (
    <>
      <div className="group/wrap relative">
        <div className="relative h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth bg-starFace bg-cover">
          <div className="group flex h-screen w-full snap-start items-center justify-center">
            <div>
              <div className="overflow-hidden font-clash text-7xl font-medium">
                <div className=" group-hover:animate-reveal text-white">
                  Hello There!
                </div>
              </div>
              <div className="overflow-hidden font-clash text-7xl font-medium">
                <div className=" group-hover:animate-reveal group-hover:animation-delay-300 text-white">
                  I&apos;m Lord Zeus.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
