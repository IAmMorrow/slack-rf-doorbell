import express from 'express';
import { onit, sag } from './messages';

const router = new express.Router();


router.post('/slack/actions', async (req, res) => {
  try {
    const slackReqObj = req.body.payload;

    const parsed = JSON.parse(slackReqObj);

    const response = {
      response_type: 'in_channel',
      channel: slackReqObj.channel_id,
      link_names: 1,
      text: "Quelqu'un sonne à la porte !",
      attachments: parsed.actions[0].value === 'onit' ? onit(parsed.user).attachments : sag().attachments,
    };
    return res.json(response);
  } catch (err) {
    console.log(err)
    return res.status(500).send('Something blew up. We\'re looking into it.');
  }
});

export default router;
