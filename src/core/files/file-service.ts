import { promises } from 'fs';
import { dirname, join } from 'path';

export default class FileService {
  public getFilePath(folder: string, name: string): string {
    return join(dirname(folder) + '/' + name);
  }

  public async deleteFileIfExist(path: string): Promise<void> {
    if (await this.isExist(path)) {
      promises.unlink(path);
    }
  }

  private async isExist(path: string): Promise<boolean> {
    try {
      await promises.stat(path);
      return true;
    } catch {
      return false;
    }
  }
}
