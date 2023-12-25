import { CommandType } from '../../core/executors/command.types.js';

export enum FfmpegKeys {
  Codec = '-c:v',
  Path = '-i',
  Size = '-s',
}

export interface FfmpegMap extends Map<FfmpegKeys, string> {}

export type InputObject = {
  codec?: string;
  height: number;
  name: string;
  path: string;
  width: number;
};

export interface FfmpegCommandType extends CommandType {
  output: string;
}
