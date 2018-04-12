import Slack from 'slack';
import './http';

import { ring, completed } from './messages';

export default class SlackService {
  constructor(conf) {
    const {
      token,
      channel,
    } = conf;
    this.slack = new Slack({ token });
    this.channel = channel;
    this.lastMessage = null;
  }

  async sendRingMessage() {
    const result = await this.slack.chat.postMessage({
      as_user: true,
      channel: this.channel,
      ...ring(),
    });
    this.lastMessage = result;
  }

  async complete() {
    if (this.lastMessage) {
      await this.slack.chat.update({
        as_user: true,
        channel: this.lastMessage.channel,
        ts: this.lastMessage.message.ts,
        ...completed(),
      });
      this.lastMessage = null;
    }
  }
}
// const bot = new Slack({ token });
