import express from 'express';

const router = new express.Router();

const attachments = user => ([
  {
    text: `<@${user.id}> y va !`,
  },
]);

const attachments2 = [
  {
    text: "Le service d'acceuil Gauthier prendra votre demande en compte dès que possible !",
  },
];

router.post('/slack/actions', async (req, res) => {
  try {
    const slackReqObj = req.body.payload;
    console.log(slackReqObj);

    const parsed = JSON.parse(slackReqObj);

    console.log(parsed);

    const response = {
      response_type: 'in_channel',
      channel: slackReqObj.channel_id,
      link_names: 1,
      text: "Quelqu'un sonne à la porte !",
      attachments: parsed.actions[0].value === 'onit' ? attachments(parsed.user) : attachments2,
    };
    return res.json(response);
  } catch (err) {
    return res.status(500).send('Something blew up. We\'re looking into it.');
  }
});

export default router;
