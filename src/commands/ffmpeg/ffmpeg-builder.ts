import { CommandType } from '../../core/executor/command.types.js';

export default class FfmpegBuilder {
  public static COMMAND_NAME = 'ffmpeg';

  public static DEFAULT_PATH = './';
  public static DEFAULT_NAME = 'default-name.mpeg';
  public static DEFAULT_WIDTH = 128;
  public static DEFAULT_HEIGHT = 96;

  private path = FfmpegBuilder.DEFAULT_PATH;
  private name = FfmpegBuilder.DEFAULT_NAME;
  private width = FfmpegBuilder.DEFAULT_WIDTH;
  private height = FfmpegBuilder.DEFAULT_HEIGHT;

  public setPath(path: string): this {
    this.path = path;
    return this;
  }

  public setName(name: string): this {
    this.name = name;
    return this;
  }

  public setWidth(width: number): this {
    this.width = width;
    return this;
  }

  public setHeight(height: number): this {
    this.height = height;
    return this;
  }

  public build(): CommandType {
    const command = FfmpegBuilder.COMMAND_NAME;
    const args = [
      '-i',
      this.path,
      '-c:v',
      'libx264',
      '-s',
      `${this.width}x${this.height}`,
      `${this.path}/${this.name}`,
    ];
    return { command, args };
  }
}
