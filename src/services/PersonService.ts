export class PersonService {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public sayHello(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

