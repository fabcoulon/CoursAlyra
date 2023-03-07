/*
  Try `truffle exec scripts/increment.js`, you should `truffle migrate` first.

  Learn more about Truffle external scripts: 
  https://trufflesuite.com/docs/truffle/getting-started/writing-external-scripts
*/

const Greeting = artifacts.require("Greeting");

module.exports = async function (callback) {
  const deployed = await Greeting.deployed();

  const currentValue = (await deployed.read()).toNumber();
  console.log(`Current Greeting value: ${currentValue}`);

  const { tx } = await deployed.write(currentValue + 1);
  console.log(`Confirmed transaction ${tx}`);

  const updatedValue = (await deployed.read()).toNumber();
  console.log(`Updated Greeting value: ${updatedValue}`);

  callback();
};
