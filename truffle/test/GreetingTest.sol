// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../contracts/Greeting.sol";
// These files are dynamically created at test time
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";

contract GreetingTest {

  function testWriteValue() public {
    Greeting greeting = Greeting(DeployedAddresses.Greeting());

    Assert.equal(greeting.read(), 0, "Contract should have 0 stored");
    greeting.write(1);
    Assert.equal(greeting.read(), 1, "Contract should have 1 stored");
    greeting.write(2);
    Assert.equal(greeting.read(), 2, "Contract should have 2 stored");
  }
}
