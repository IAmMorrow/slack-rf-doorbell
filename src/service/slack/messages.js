export const onit = user => ({
  attachments: [
    {
      text: `<@${user.id}> y va !`,
    },
  ],
});

export const sag = () => ({
  attachments: [
    {
      text: "Le service d'acceuil Gauthier prendra votre demande en compte dès que possible !",
    },
  ],
});

export const ring = () => ({
  text: "Quelqu'un sonne à la porte !",
  attachments: [
    {
      text: 'La porte est fermée, ouverture nécéssaire !',
      callback_id: 'bell-ringing',
      actions: [
        {
          name: 'onit',
          text: "J'y vais !",
          type: 'button',
          value: 'onit',
        },
        {
          name: 'onit',
          text: 'LESLIE !',
          type: 'button',
          value: 'leslito',
        },
      ],
    },
  ],
});
