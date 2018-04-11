import Slack from 'slack';
import './http';

import { ring } from './messages';

export default class SlackService {
  constructor(conf) {
    const {
      token,
    } = conf;
    this.slack = new Slack({ token });
  }

  async test() {
    const result = await this.slack.chat.postMessage({
      as_user: true,
      channel: 'U7L91A73P',
      ...ring(),
    });
    console.log('done', result);
  }
}
// const bot = new Slack({ token });
