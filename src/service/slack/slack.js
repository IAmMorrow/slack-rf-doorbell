import Slack from 'slack';
import './http';

const message = {
  attachments: [
    {
      text: "Quelqu'un sonne à la porte !",
      callback_id: 'bell-ringing',
      actions: [
        {
          name: 'onit',
          text: "J'y vais !",
          type: 'button',
          value: 'onit',
        },
      ],
    },
  ],
};

export default class SlackService {
  constructor(conf) {
    const {
      token,
    } = conf;
    this.slack = new Slack({ token });
  }

  async test() {
    const result = await this.slack.chat.postMessage({ channel: 'U7L91A73P', text: 'lol', attachments: message.attachments });
    console.log('done', result);
  }
}
// const bot = new Slack({ token });
