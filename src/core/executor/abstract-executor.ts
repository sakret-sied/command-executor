import { ChildProcessWithoutNullStreams } from 'child_process';
import StreamLoggerInterface from '../handlers/stream-logger-interface.js';
import { CommandType } from './command.types.js';

export default abstract class AbstractExecutor<Input> {
  constructor(private logger: StreamLoggerInterface) {}

  public async execute() {
    const input = await this.input();
    const command = this.build(input);
    const stream = this.spawn(command);
    this.processStream(stream, this.logger);
  }

  protected abstract input(): Promise<Input>;

  protected abstract build(input: Input): CommandType;

  protected abstract spawn(
    command: CommandType
  ): ChildProcessWithoutNullStreams;

  protected abstract processStream(
    stream: ChildProcessWithoutNullStreams,
    logger: StreamLoggerInterface
  ): void;
}
