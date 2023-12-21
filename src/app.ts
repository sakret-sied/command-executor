import PromptService from './core/prompts/prompt-service.js';
import ConsoleLogger from './out/console-logger/console-logger.js';

export default class App {
  public async run() {
    const result = await new PromptService().input<number>('Number', 'number');
    ConsoleLogger.getInstance().log(result);
  }
}

const app = new App();
app.run();
