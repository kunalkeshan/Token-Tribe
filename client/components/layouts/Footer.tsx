import React from "react";
import Link from "next/link";
import {
  AiFillGithub,
  AiOutlineLink,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  const navOptions = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Features",
      url: "/#features",
    },
    {
      name: "FAQs",
      url: "/#faqs",
    },
    {
      name: "NGOs",
      url: "/ngo",
    },
    {
      name: "Profile",
      url: "/user",
    },
  ];

  const teamOptions = [
    {
      name: "Kunal Keshan",
      github: "https://github.com/kunalkeshan",
      linkedin: "https://www.linkedin.com/in/kunalkeshan",
      twitter: "https://twitter.com/_kunalkeshan_",
      portfolio: "https://kunalkeshan.dev",
    },
    {
      name: "Kevin Paul",
      github: "https://github.com/itaintkevin",
      linkedin: "https://www.linkedin.com/in/itaintkevin",
      twitter: "https://twitter.com/it_aint_kevin",
      portfolio: "https://kevinpaul.xyz",
    },
    {
      name: "Arnav Shukla",
      github: "https://github.com/thelordzeus",
      linkedin: "https://www.linkedin.com/in/arnavshukla",
      twitter: "https://twitter.com/iamlordzeus",
      portfolio: "https://www.lordzeus.tech",
    },
  ];

  return (
    <footer className="mt-auto min-h-[20vh] bg-primary text-white border-b">
      <div className="container mx-auto max-w-[1240px] flex flex-col flex-wrap py-4 px-5 sm:flex-row gap-2">
        <div className="my-[2%] flex-grow">
          <div className="mb-4 flex items-center">
            <a
              className="text-xl font-semibold hover:text-gray-500"
              href="https://github.com/kunalkeshan/Token-Tribe"
            >
              Token Tribe
            </a>
          </div>
          <p className="text-sm text-gray-300">
            <span>Copyright &copy; 2023 Token Tribe</span>
            <span>All rights reserved.</span>
          </p>
        </div>
        <div className="my-[2%] flex-grow">
          <h4 className="mb-2 text-lg font-medium">Pages</h4>
          <nav className="flex flex-wrap">
            {navOptions.map((option, index) => (
              <>
                <Link
                  key={index}
                  href={option.url}
                  className="w-auto rounded-md py-2 pr-3 text-sm font-medium text-gray-300 hover:text-gray-500 "
                >
                  {option.name}
                </Link>
              </>
            ))}
          </nav>
        </div>
        <div className="my-[2%] flex-grow">
          <h4 className="mb-2 text-lg font-medium">Team</h4>
          <nav className="flex flex-wrap">
            {teamOptions.map((option, index) => (
              <>
                <ul
                  key={index}
                  className="w-auto rounded-md py-2 pr-3 text-sm font-medium text-gray-300 "
                >
                  <li className="text-white ">{option.name}</li>
                  <li className="flex hover:text-gray-500">
                    <Link href={option.github} className="pr-2" target="_blank">
                      <AiFillGithub size={25} />
                    </Link>
                    <Link
                      href={option.linkedin}
                      className="pr-2"
                      target="_blank"
                    >
                      <AiFillLinkedin size={25} />
                    </Link>
                    <Link
                      href={option.twitter}
                      className="pr-2"
                      target="_blank"
                    >
                      <AiFillTwitterCircle size={25} />
                    </Link>
                    <Link
                      href={option.portfolio}
                      className="pr-2"
                      target="_blank"
                    >
                      <AiOutlineLink size={25} />
                    </Link>
                  </li>
                </ul>
              </>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
