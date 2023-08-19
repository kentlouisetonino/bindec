import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

export default class IOService {
  // This methid create an instance of the readline interface.
  static instance() {
    return readline.createInterface({ input: stdin, output: stdout });
  }
}
