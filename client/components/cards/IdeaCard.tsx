import React from "react";

const IdeaCard = () => {
  const Idea = [
    {
      title: "XYZ Idea",
      target: "xyz",
      deadline: "2021-12-31",
      raisedAmt: 25,
      contributors: 10,
      daysLeft: 10,
    },
    {
      title: "XYZ Idea",
      target: "xyz",
      deadline: "2021-12-31",
      raisedAmt: 25,
      contributors: 10,
      daysLeft: 10,
    },
    {
      title: "XYZ Idea",
      target: "xyz",
      deadline: "2021-12-31",
      raisedAmt: 25,
      contributors: 10,
      daysLeft: 10,
    },
    {
      title: "XYZ Idea",
      target: "xyz",
      deadline: "2021-12-31",
      raisedAmt: 25,
      contributors: 10,
      daysLeft: 10,
    },
    {
      title: "XYZ Idea",
      target: "xyz",
      deadline: "2021-12-31",
      raisedAmt: 25,
      contributors: 10,
      daysLeft: 10,
    },
  ];
  return (
    <div>
      {Idea.map((idea) => (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {idea.title}
          </h5>
          <div className="flex">
            <ul>
              <li className="font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold">Target: </span>
                {idea.target}
              </li>
              <li className="font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold">Deadline: </span>
                {idea.deadline}
              </li>
              <li className="font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold">Raised Amount: </span>
                {idea.raisedAmt}
              </li>
              <li className="font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold">Contributors: </span>
                {idea.contributors}
              </li>
            </ul>
            <div className="ml-12">
              <p className="bg-blue-500 p-10 rounded-lg">{idea.daysLeft}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IdeaCard;
