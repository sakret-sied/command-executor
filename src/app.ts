import FfmpegExecutor from './commands/ffmpeg/ffmpeg-executor.js';
import ConsoleLogger from './out/console-logger/console-logger.js';

export default class App {
  public async run() {
    new FfmpegExecutor(ConsoleLogger.getInstance()).execute();
  }
}

const app = new App();
app.run();
