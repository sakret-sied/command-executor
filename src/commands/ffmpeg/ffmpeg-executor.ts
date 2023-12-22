import { ChildProcessWithoutNullStreams } from 'child_process';
import AbstractExecutor from '../../core/executor/abstract-executor.js';
import { CommandType } from '../../core/executor/command.types.js';
import StreamLoggerInterface from '../../core/handlers/stream-logger-interface.js';
import { FfmpegParams } from './ffmpeg-types.js';

export default class FfmpegExecutor extends AbstractExecutor<FfmpegParams> {
  protected build(input: FfmpegParams): CommandType {
    throw new Error('Method not implemented.');
  }
  protected input(): Promise<FfmpegParams> {
    throw new Error('Method not implemented.');
  }
  protected spawn(command: CommandType): ChildProcessWithoutNullStreams {
    throw new Error('Method not implemented.');
  }
  protected processStream(
    stream: ChildProcessWithoutNullStreams,
    logger: StreamLoggerInterface
  ): void {
    throw new Error('Method not implemented.');
  }
}
