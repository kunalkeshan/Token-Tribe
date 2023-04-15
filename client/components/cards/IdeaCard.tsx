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
        <div className="block max-w-md p-6 border bg-secondary rounded-lg shadow   border-black  mb-4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {idea.title}
          </h5>
          <div className="flex ">
            <ul>
              <li className="font-bold text-tertiary">
                <span className=" font-secondary ">Target: </span>
                {idea.target}
              </li>
              <li className="font-bold text-tertiary">
                <span className="font-secondary">Deadline: </span>
                {idea.deadline}
              </li>
              <li className="font-bold text-tertiary">
                <span className="font-secondary">Raised Amount: </span>
                {idea.raisedAmt}
              </li>
              <li className="font-bold text-tertiary">
                <span className="font-secondary">Contributors: </span>
                {idea.contributors}
              </li>
            </ul>
            <div className=" bg-tertiary p-8 rounded-lg space-y-1 mx-auto">
              <p className="text-xl font-bold ml-3">{idea.daysLeft}</p>
              <p className="font-secondary text-xs">Days Left</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IdeaCard;
