import StreamLoggerInterface from '../../core/handlers/stream-logger-interface.js';

export default class ConsoleLogger implements StreamLoggerInterface {
  private static instance: ConsoleLogger;

  private constructor() {}

  public static getInstance(): ConsoleLogger {
    if (!ConsoleLogger.instance) {
      ConsoleLogger.instance = new ConsoleLogger();
    }
    return ConsoleLogger.instance;
  }

  public log(...args: any[]): void {
    console.log(...args);
  }

  public error(...args: any[]): void {
    console.error(...args);
  }

  public end(): void {
    console.log('End');
  }
}
