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
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-2">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {idea.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Target: </span>
            {idea.target}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Deadline: </span>
            {idea.deadline}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Raised Amount: </span>
            {idea.raisedAmt}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Contributors: </span>
            {idea.contributors}
          </p>
        </div>
      ))}
    </div>
  );
};

export default IdeaCard;
