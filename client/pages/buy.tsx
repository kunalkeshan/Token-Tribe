import React from "react";
import Link from "next/link";
import Image from "next/image";

const TokenStorePage = () => {
  return (
    <div className="antialiased">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div x-data="{ image: 1 }" x-cloak>
                <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 ">
                  <div
                    x-show="image === 1"
                    className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center "
                  >
                    <Image
                      src="/CommiuniCoin.png"
                      alt="token logo of Token Tribe"
                      width={600}
                      height={500}
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex -mx-2 mb-4">
                  {/* here i had the template tag  */}
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-secondary text-2xl md:text-3xl">
                CommuniCoin
              </h2>
              <p className="text-gray-500 text-sm">
                By{" "}
                <Link href="/" className="text-indigo-600 hover:underline">
                  Token Tribe
                </Link>
              </p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className=" text-primary mr-1 mt-1">ETH</span>
                    <span className="font-bold text-primary text-3xl">
                      0.005
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">
                    Save 12%
                  </p>
                  <p className="text-gray-400 text-sm">
                    Inclusive of all Taxes.
                  </p>
                </div>
              </div>

              <p className=" text-tertiary ">
                CommuniCoin is a community-focused token that enables users to
                vote on community decisions and activities. It allows for
                greater participation and democracy within communities, giving
                users a say in the direction of the community.
              </p>

              <div className="flex py-4 space-x-4">
                <div className="relative">
                  <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-secondary tracking-wide font-semibold">
                    Qty
                  </div>
                  <select className="cursor-pointer appearance-none rounded-xl border bg-black border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                    <option className="text-black">1</option>
                    <option className="text-black">2</option>
                    <option className="text-black">3</option>
                    <option className="text-black">4</option>
                    <option className="text-black">5</option>
                    <option className="text-black">6</option>
                    <option className="text-black">7</option>
                    <option className="text-black">8</option>
                    <option className="text-black">9</option>
                    <option className="text-black">10</option>
                    <option className="text-black">11</option>
                    <option className="text-black">12</option>
                    <option className="text-black">13</option>
                    <option className="text-black">14</option>
                    <option className="text-black">15</option>
                    <option className="text-black">16</option>
                    <option className="text-black">17</option>
                    <option className="text-black">18</option>
                    <option className="text-black">19</option>
                    <option className="text-black">20</option>
                  </select>

                  <svg
                    className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>

                <button
                  type="button"
                  className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenStorePage;
