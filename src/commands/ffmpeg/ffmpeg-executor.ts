import { ChildProcessWithoutNullStreams } from 'child_process';
import AbstractExecutor from '../../core/executor/abstract-executor.js';
import { CommandType } from '../../core/executor/command.types.js';
import StreamLoggerInterface from '../../core/handlers/stream-logger-interface.js';
import FfmpegBuilder from './ffmpeg-builder.js';
import { FfmpegBuildParams } from './ffmpeg-types.js';

export default class FfmpegExecutor extends AbstractExecutor<FfmpegBuildParams> {
  protected input(): Promise<FfmpegBuildParams> {
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

  protected build(input: FfmpegBuildParams): CommandType {
    return new FfmpegBuilder()
      .setPath(input.path ?? FfmpegBuilder.DEFAULT_PATH)
      .setName(input.name ?? FfmpegBuilder.DEFAULT_NAME)
      .setWidth(input.width ?? FfmpegBuilder.DEFAULT_WIDTH)
      .setHeight(input.height ?? FfmpegBuilder.DEFAULT_HEIGHT)
      .build();
  }
}
