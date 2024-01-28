import { Command } from './command.interface.js';
import { TSVFileReader } from '../../shared/libs/file-reader/tsv-file-reader.js';

export class ImportCommand implements Command {
  public getCommandName(): string {
    return '--import';
  }

  public execute(...params: string[]): void {
    const [filename] = params;
    const fileReader = new TSVFileReader(filename.trim());

    try {
      fileReader.read();
      console.log(fileReader.toArray());
    } catch (err) {

      if (!(err instanceof Error)) {
        throw err;
      }

      console.error(`Невозможно импортировать данные из файла ${filename}`);
      console.error(`Детали: ${err.message}`);
    }
  }
}
