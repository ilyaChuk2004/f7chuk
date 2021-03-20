
import { createStore } from 'framework7';


const store = createStore({
  state: {
    count: 10,
    appData: {
      tab: '1',
      events: {

      },
    },
    data: {
      contacts: [
        {
          text: 'телеграм',
          href: 'https://t.me/IlyaChuk',
          disc: 'написать мне',
          btn_bgcol: '#00a2ff',
          btn_bgcoln: '#00a2ff',
          img: 'telegIco.svg',
        },
        {
          text: 'фрилансхант',
          href: 'https://chuk.dx.am',
          disc: 'заказать работу',
          btn_bgcol: '#c3ae19',
          btn_bgcoln: '#e5cf2f',
          img: 'freelIco.png'
        },

      ],

    posts:[
      {
        name:'ww',
        name_ru:'',
        postcss:{
        boxshadow:'',
        filter:'',
        animation:''
        },
        cursour:{
          path:'',
          _id:''
        }
      },
    ],

    pngs:[
      {
        name:'autummLandscapeCopy',

      },
      {
        name:'pixelLandscapeEdited',

      },
      {
        name:'firewatchCopy',

      },
      {
        name:'mount',

      },
      {
        name:'pinkLandscapeCopeeEdited',

      },
      {
        name:'forest',

      },
      {
        name:'winter',

      },
    ]
  }
  },
})
export default store;
