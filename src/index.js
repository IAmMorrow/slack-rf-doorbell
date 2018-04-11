import RfxcomService from './service/rfxcom';
import SlackService from './service/slack';

import { rfxcomConf, slackConf } from './config';

const rfxcom = new RfxcomService(rfxcomConf);
const slack = new SlackService(slackConf);

const onRing = () => console.log('DING DONG'); // slack.ring();
const onDoor = status => console.log(status ? 'opened' : 'closed'); // slack.ring();

rfxcom.on('ring', onRing);
rfxcom.on('door', onDoor);

async function start() {
  await slack.test();
//  await rfxcom.connect('/dev/ttyUSB0');
}

start();
