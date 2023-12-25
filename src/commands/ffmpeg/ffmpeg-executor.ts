import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import AbstractExecutor from '../../core/executors/abstract-executor.js';
import FileService from '../../core/files/file-service.js';
import StreamHandler from '../../core/handlers/stream-handler.js';
import StreamLoggerInterface from '../../core/handlers/stream-logger-interface.js';
import PromptService from '../../core/prompts/prompt-service.js';
import FfmpegBuilder from './ffmpeg-builder.js';
import { FfmpegCommandType, InputObject } from './ffmpeg-types.js';

export default class FfmpegExecutor extends AbstractExecutor<InputObject> {
  private fileService: FileService = new FileService();
  private promptService: PromptService = new PromptService();

  protected async input(): Promise<InputObject> {
    const path = await this.promptService.input<string>('Path:', 'input');
    const width = await this.promptService.input<number>('Width:', 'number');
    const height = await this.promptService.input<number>('Height:', 'number');
    const name = await this.promptService.input<string>('Name:', 'input');
    return { path, width, height, name };
  }

  protected build({
    path,
    codec,
    width,
    height,
    name,
  }: InputObject): FfmpegCommandType {
    const output = this.fileService.getFilePath(path, name);
    console.log(output);
    const args = new FfmpegBuilder()
      .setPath(path ? path : FfmpegBuilder.DEFAULT_PATH)
      .setCodec(codec ? codec : FfmpegBuilder.DEFAULT_CODEC)
      .setSize(
        width ? width : FfmpegBuilder.DEFAULT_WIDTH,
        height ? height : FfmpegBuilder.DEFAULT_HEIGHT
      )
      .build(name ? name : FfmpegBuilder.DEFAULT_NAME);

    return { command: 'ffmpeg', args, output };
  }

  protected spawn({
    command,
    args,
    options,
    output,
  }: FfmpegCommandType): ChildProcessWithoutNullStreams {
    this.fileService.deleteFileIfExist(output);
    return spawn(command, args, options);
  }

  protected processStream(
    stream: ChildProcessWithoutNullStreams,
    logger: StreamLoggerInterface
  ): void {
    new StreamHandler(logger).processOutput(stream);
  }
}
