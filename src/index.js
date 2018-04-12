import moment from 'moment';

import RfxcomService from './service/rfxcom';
import SlackService from './service/slack';

import { rfxcomConf, slackConf } from './config';

const rfxcom = new RfxcomService(rfxcomConf);
const slack = new SlackService(slackConf);

const doorState = {
  open: false,
  lastRing: null,
  completed: false,
};

const onRing = () => {
  const time = moment();

  if (!doorState.open && (!doorState.lastRing || time.diff(doorState.lastRing, 'seconds') > 15)) {
    slack.sendRingMessage();
    doorState.completed = false;
    doorState.lastRing = time;
  }
};

const onDoor = (status) => {
  if (!doorState.open && status) {
    if (!doorState.completed) {
      slack.complete();
      doorState.completed = true;
    }
  }
  doorState.open = status;
};

rfxcom.on('ring', onRing);
rfxcom.on('door', onDoor);

async function start() {
  await rfxcom.connect('/dev/tty.usbserial-A12HRPYP');
}

start();
