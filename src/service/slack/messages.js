import moment from 'moment';
import assets from './assets';


const randomizeAsset = (name) => {
  const asset = assets[Math.floor(Math.random() * assets.length)];
  return asset.replace('%NAME%', name);
};

export const onit = user => ({
  attachments: [
    {
      text: randomizeAsset(`<@${user.id}>`),
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
  text: "<!here> Quelqu'un sonne à la porte !",
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
        // {
        //   name: 'onit',
        //   text: 'LESLIE !',
        //   type: 'button',
        //   value: 'leslito',
        // },
      ],
    },
  ],
});

export const completed = () => ({
  text: "Quelqu'un sonne à la porte !",
  attachments: [
    {
      text: 'La porte à été ouverte !',
      footer: `Porte ouverte à ${moment().format('HH:mm:ss')}`,
      footer_icon: 'http://www.egoleap.com/wp-content/uploads/2015/07/checkmark-blue.png',
    },
  ],
});
