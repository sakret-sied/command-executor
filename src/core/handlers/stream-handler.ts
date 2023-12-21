import { ChildProcessWithoutNullStreams } from 'child_process';
import StreamLoggerInterface from './stream-logger-interface.js';

export default class StreamHandler {
  constructor(private logger: StreamLoggerInterface) {}

  public processOutput(stream: ChildProcessWithoutNullStreams) {
    stream.stdout.on('data', (data: any) => {
      this.logger.log(data);
    });

    stream.stderr.on('data', (data: any) => {
      this.logger.error(data);
    });

    stream.on('close', (data: any) => {
      this.logger.end();
    });
  }
}
