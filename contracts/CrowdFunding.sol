// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

contract CrowdFunding {
    struct Idea {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        address[] donators;
        uint256[] donations;
    }

    mapping (uint256 => Idea) public ideas;
    uint256 public numberOfIdeas = 0;

    function createIdea(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline) public returns(uint256) {
        Idea storage idea = ideas[numberOfIdeas];

        require(idea.deadline < block.timestamp, "The deadline date should be in the future.");
        idea.owner = _owner;
        idea.title = _title;
        idea.description = _description;
        idea.target = _target;
        idea.deadline = _deadline;
        idea.amountCollected = 0;

        numberOfIdeas++;
        return numberOfIdeas - 1;
    }

    function donateToIdea(uint256 _id) public payable {
        uint256 amount = msg.value;

        Idea storage idea = ideas[_id];

        idea.donators.push(msg.sender);
        idea.donations.push(amount);

        (bool sent, ) = payable(idea.owner).call{value: amount}("");

        if(sent) {
            idea.amountCollected = idea.amountCollected + amount;
        }
    }

    function getDonators(uint256 _id) view public returns(address[] memory, uint256[] memory) {
        return (ideas[_id].donators, ideas[_id].donations);
    }

    function getIdeas() public view returns (Idea[] memory) {
        Idea[] memory allIdeas = new Idea[](numberOfIdeas);

        for(uint i = 0; i < numberOfIdeas; i++) {
            Idea storage item = ideas[i];

            allIdeas[i] = item;
        }

        return allIdeas;
    }
}