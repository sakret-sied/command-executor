import { ChildProcessWithoutNullStreams } from 'child_process';
import StreamLoggerInterface from './stream-logger-interface.js';

export default class StreamHandler {
  constructor(private logger: StreamLoggerInterface) {}

  public processOutput(stream: ChildProcessWithoutNullStreams) {
    stream.stdout.on('data', (data: any) => {
      this.logger.log(this.bufferToText(data));
    });

    stream.stderr.on('data', (data: any) => {
      this.logger.error(this.bufferToText(data));
    });

    stream.on('close', () => {
      this.logger.close();
    });
  }

  private bufferToText(data: any): string {
    return Buffer.from(data, 'utf-8').toString();
  }
}
