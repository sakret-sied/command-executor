import { FfmpegKeys, FfmpegMap } from './ffmpeg-types.js';

export default class FfmpegBuilder {
  public static DEFAULT_CODEC = 'libx264';
  public static DEFAULT_PATH = 'D:/Projects/command-executor/temp.mp4';
  public static DEFAULT_NAME = 'temp2.mp4';
  public static DEFAULT_WIDTH = 640;
  public static DEFAULT_HEIGHT = 480;

  private args: FfmpegMap = new Map();

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

  public build(name: string = FfmpegBuilder.DEFAULT_NAME): string[] {
    const args: string[] = [];
    this.args.forEach((value, key) => args.push(key, value));
    args.push(name);
    return args;
  }
}
