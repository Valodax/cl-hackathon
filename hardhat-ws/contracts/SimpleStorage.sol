// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    // private means that only my contract can access this variable.
    // (It is not hidden from the blockchain).
    string private message;
    address public owner; // Solidity will generate "owner()" getter function for us.

    event MessageChanged(string newMessage);

    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

    constructor() {
        message = "My new message is cool";
        owner = msg.sender; // msg.sender is the wallet which called this function
    }

    // Check-Effects-Interaction pattern
    function setMessage(string memory newMessage) public onlyOwner {
        require(bytes(newMessage).length > 0, "Empty strings not allowed");

        message = newMessage;
        emit MessageChanged(newMessage);
    }

    // view functions are free to consume (no gas required).
    function getMessage() public view returns (string memory) {
        return message;
    }
}
