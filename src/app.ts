import figlet from "figlet";
import { Command } from "commander";
import logger from "./logger";

export class Application {
  private program: Command;
  constructor() {
    this.program = new Command();
  }

  public async execute() {
    try {
      console.log("Hello Program");
    } catch (error) {
      logger.error(error);
    }
  }

  public async run() {
    console.info(figlet.textSync("I am a CLI"));
    this.program.version("1.0.0");
    try {
      await this.execute();
    } catch (error) {
      logger.error(error);
    }
  }
}
