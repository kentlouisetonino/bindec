import AppService from './services/AppService';
import IOService from './services/IOService';

(async function App() {
  AppService.cleanUp();
  AppService.description();

  const io = IOService.instance()
  const test = await io.question("Sample question: ");
  console.log('test', test);
  io.close()
})();

