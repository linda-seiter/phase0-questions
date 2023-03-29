import { shout, logShout } from './index.js';
  
describe("shout(string)", function () {
  it("receives one argument and returns it in all caps", function () {
    expect(shout("hello")).toEqual("HELLO");
  });
});

describe("logShout(string)", function () {
  it("takes a string argument and logs it in all caps using console.log()", function () {
    const logSpy = jest.spyOn(console, "log");

    logShout("hello");

    expect(logSpy).toHaveBeenCalledWith("HELLO");

    logSpy.mockRestore();
  });
});
