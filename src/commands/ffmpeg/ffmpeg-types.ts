export const enum FfmpegKeys {
  Codec = '-c:v',
  Path = '-i',
  Size = '-s',
}

export interface FfmpegParams extends Map<FfmpegKeys, string> {}
