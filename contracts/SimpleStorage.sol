pragma solidity ^0.5.16;

contract SimpleStorage {
    uint public storedData;

    address public caller;

    function set(uint x) public {
        caller = msg.sender;
        storedData = x;
    }
}
