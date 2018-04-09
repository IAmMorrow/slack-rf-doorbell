import express from 'express';

const router = new express.Router();

router.post('/slack/actions', async (req, res) => {
  try {
    const slackReqObj = req.body;
    console.log(slackReqObj);
    const response = {
      response_type: 'in_channel',
      channel: slackReqObj.channel_id,
      text: 'Hello :slightly_smiling_face:',
    };
    return res.json(response);
  } catch (err) {
    return res.status(500).send('Something blew up. We\'re looking into it.');
  }
});

export default router;
