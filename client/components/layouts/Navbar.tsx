import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { CrowdFundingContext } from '@/context/CrowdFunding';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [color, setColor] = useState('transparent');
	const [textColor, setTextColor] = useState('white');
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
	const handleNav = () => {
		setNav(!nav);
	};

  const handleWalletConnect = () => {
    connectWallet();
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 80) {
        setColor("#0D0D0D");
        setTextColor("#ffffff");
      } else {
        setColor("transparent");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <nav
      style={{ backgroundColor: `${color}` }}
      className="sticky z-20 left-0 top-0 w-full  ease-in duration-300 "
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Token Tribe
          </h1>
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex items-center justify-between"
        >
          <li className="p-4 hover:text-gray-500">
            <Link href="/">Explore</Link>
          </li>
          <li className="p-4 hover:text-gray-500">
            <Link href="/my-communities">My Communities</Link>
          </li>
          <li className="p-4 hover:text-gray-500">
            <Link href="/about">About us</Link>
          </li>
          <li className="p-4 hover:text-gray-500">
            <Link href="/buy">Buy Token</Link>
          </li>
          {!currentAccount && (<li className="p-4">
            <a
              href="#_"
              className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <button onClick={connectWallet()} className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                Connect wallet
              </button>
              <span className="absolute inset-0 border-2 border-white rounded-full"></span>
            </a>
          </li>)}
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Explore</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/my-communities">My Communities</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/about">About us</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/buy">Buy Tokens</Link>
            </li>
            {!currentAccount && (<li onClick={handleNav} className="p-4 text-4xl ">
              <Link
                href="/connectWallet"
                className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
              >
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <button onClick={() => connectWallet()} className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Connect Wallet
                </button>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
              </Link>
            </li>)}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
