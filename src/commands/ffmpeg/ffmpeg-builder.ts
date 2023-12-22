import { CommandType } from '../../core/executor/command.types.js';
import { FfmpegKeys, FfmpegParams } from './ffmpeg-types.js';

export default class FfmpegBuilder {
  public static COMMAND_NAME = 'ffmpeg';

  public static DEFAULT_CODEC = 'libx264';
  public static DEFAULT_PATH = './';
  public static DEFAULT_NAME = 'default-name';
  public static DEFAULT_WIDTH = 128;
  public static DEFAULT_HEIGHT = 96;

  private args: FfmpegParams = new Map();

  public setCodec(codec: string = FfmpegBuilder.DEFAULT_CODEC): this {
    this.args.set(FfmpegKeys.Codec, codec);
    return this;
  }

  public setPath(path: string = FfmpegBuilder.DEFAULT_PATH): this {
    this.args.set(FfmpegKeys.Path, path);
    return this;
  }

  public setSize(
    width: number = FfmpegBuilder.DEFAULT_WIDTH,
    height: number = FfmpegBuilder.DEFAULT_HEIGHT
  ): this {
    this.args.set(FfmpegKeys.Size, `${width}x${height}`);
    return this;
  }

  public build(name: string = FfmpegBuilder.DEFAULT_NAME): CommandType {
    const command = FfmpegBuilder.COMMAND_NAME;
    const args: string[] = [];
    this.args.forEach((value, key) => args.push(key, value));
    args.push(name);
    return { command, args };
  }
}
