// SPDX-License-Identifier: GLP-3.0

pragma solidity ^0.8.4;

contract Demo {
    uint a = 10;

    constructor(uint b) {
        b = a;
    }
    
    function setter(uint _a) public {
        a = _a;
    }

    function getter() public view returns(uint) {
        return a;
    }
}
