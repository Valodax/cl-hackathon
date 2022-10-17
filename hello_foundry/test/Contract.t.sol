// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import "forge-std/Test.sol";
import "../src/Counter.sol";
import "../src/Contract.sol";

contract ContractTest is Test {
    Contract public myContract;

    function setUp() public {
        myContract = new Contract();
    }

    function testExample() public {
        assertTrue(true);
    }

    function testHello() public {
        assertEq(myContract.hello(), "Hello, Foundry!");
    }

    function testSetNumber() public {
        myContract.setNumber(42);
        assertEq(myContract.number(), 42);
    }
}
