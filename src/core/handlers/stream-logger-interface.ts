export default interface StreamLoggerInterface {
  log(...args: any[]): void;

  error(...args: any[]): void;

  close(): void;
}
