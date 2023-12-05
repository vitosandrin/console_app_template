import { Application } from "./app";
import logger from "./logger";

enum ExitStatus {
  Failure = 1,
  Success = 0,
}

process.on("unhandledRejection", (reason, promise) => {
  logger.error(`App exiting due to an unhandled promise: ${promise} and reason: ${reason}`);
  throw reason;
});

process.on("uncaughtException", (error) => {
  logger.error(`App exiting due to an uncaught exception: ${error}`);
  process.exit(ExitStatus.Failure);
});

(async (): Promise<void> => {
  try {
    logger.info("Starting app...");
    try {
      const app = new Application();
      await app.run();

      logger.info(`App exited with success`);
      process.exit(ExitStatus.Success);
    } catch (error) {
      logger.error(`App exited with error: ${error}`);
      process.exit(ExitStatus.Failure);
    }
  } catch (error) {
    logger.error(`App exited with error: ${error}`);
    process.exit(ExitStatus.Failure);
  }
})();
