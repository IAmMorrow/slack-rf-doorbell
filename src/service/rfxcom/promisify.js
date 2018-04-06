import { promisifyAll } from 'bluebird';

const functions = [
  'initialise',
  'enableRFXProtocols',
];

const promisifyRfxcom = module => promisifyAll(module, {
  filter(name) {
    return functions.includes(name);
  },
  suffix: 'Async',
});

export default promisifyRfxcom;
