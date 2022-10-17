//SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

contract Contract {
    uint256 public number;

    function hello() public pure returns (string memory) {
        return "Hello, Foundry!";
    }

    function setNumber(uint256 _number) public {
        number = _number;
    }
}
