// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Greeting {
  uint value;
  string greeter;
 
  event valueChanged(uint _val);

  function read() public view returns (uint256) {
      return value;
  }

  function write(uint newValue) public {
    value = newValue;
    emit valueChanged(newValue);
  }

  function greet() public view returns (string memory) {
    return greeter;
  }

  function setGreet(string memory newGreet) public {
    greeter = newGreet;
  }
}
