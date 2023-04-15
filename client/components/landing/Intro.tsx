import React from 'react';

const Intro = () => {

  return (
    <>
      <div className="group/wrap relative mb-5">
        <div className="relative h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth bg-starFace bg-cover">
          <div className="group flex h-screen w-full snap-start items-center justify-center">
            <div>
              <div className="overflow-hidden font-clash text-6xl sm:text-7xl font-medium">
                <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal text-white">
                  Your Communities
                </div>
              </div>
              <div className="overflow-hidden font-clash text-6xl sm:text-7xl font-medium">
                <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal group-hover:animation-delay-300 text-white">
                  Starts Here.
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
