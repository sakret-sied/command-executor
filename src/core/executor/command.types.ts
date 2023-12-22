import { SpawnOptionsWithoutStdio } from 'child_process';

export type CommandType = {
  command: string;
  args?: readonly string[];
  options?: SpawnOptionsWithoutStdio;
};
