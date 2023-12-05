import { PersonService } from "../PersonService";

describe("PersonService", () => {
  const person = new PersonService("John", 30);

  describe("sayHello", () => {
    it("should a John, say hello", async () => {
      return expect(person.sayHello()).toBe("Hello, my name is John and I am 30 years old.");
    });
  });
  describe("getPerson", () => {
    it("should return a person", async () => {
      return expect(person.getPerson()).toEqual({ name: "John", age: 30 });
    });
  });
});
