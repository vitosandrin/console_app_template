import { PersonService } from "../PersonService";

describe("PersonService", () => {
  describe("sayHello", () => {
    it("should a John, say hello", async () => {
      const person = new PersonService("John", 30);
      return expect(person.sayHello()).toBe("Hello, my name is John and I am 30 years old.");
    });
  });
});
