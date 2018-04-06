import rfxcom from 'rfxcom';
import EventEmitter from 'events';

import promisifyRfxcom from './promisify';

const protocols = ['AC', 'UNDECODED', 'LIGHTING4', 'BYRONSX'].map(entry => rfxcom.protocols[entry]);
const chimeOff = [10, 3, 1, '?', 47, 49, 139, 11, 166, 7, '?'];
const chimeOn = [10, 3, 1, '?', 43, 57, 90, 178, 96, 7, '?'];

const matchRingSignal = signal => signal.every((value, index) => chimeOff[index] === '?' || chimeOff[index] === value)
      || signal.every((value, index) => chimeOn[index] === '?' || chimeOn[index] === value);

export default class RfxcomService extends EventEmitter {
  constructor() {
    super();
    this.rfxtrx = null;
  }

  async connect(port) {
    this.rfxtrx = promisifyRfxcom(new rfxcom.RfxCom(port, { debug: false }));

    console.log('initializing rfxcom');
    await this.rfxtrx.initialiseAsync();

    this.rfxtrx.on('receive', (data) => {
      if (matchRingSignal(data)) {
        this.emit('ring');
      }
    });

    this.rfxtrx.on('lighting2', (data) => {
      this.emit('door', data.commandNumber);
    });


    console.log('initialized');
    await this.rfxtrx.enableRFXProtocolsAsync(protocols);
    console.log('configured');
  }
}
