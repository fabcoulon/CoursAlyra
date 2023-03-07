const Greeting = artifacts.require("Greeting");

contract('Greeting', () => {
  it('should read newly written values', async() => {
    const greetingInstance = await Greeting.deployed();
    var value = (await greetingInstance.read()).toNumber();

    assert.equal(value, 0, "0 wasn't the initial value");

    await greetingInstance.write(1);
    value = (await greetingInstance.read()).toNumber();
    assert.equal(value, 1, "1 was not written");

    await greetingInstance.write(2);
    value = (await greetingInstance.read()).toNumber();
    assert.equal(value, 2, "2 was not written");
  });
});
