
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
        },
        thumbjpg:{_id:''},
        thumbwebp:{_id:''},
        shorttext:'',
        mainscreen:{
          bgpos:'',shorttext:'',title:''
        },
        published:{
          date:''
        },
        type:'update',
        gall:[
          {
            path:'11',
            meta:{
              title:'top'
            }
          },
          {
            path:'11',
            meta:{
              title:'top'
            }
          },
        ]
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
    },
    gf:{
      support_format_webp(){var elem=document.createElement("canvas");return!(!elem.getContext||!elem.getContext("2d"))&&0==elem.toDataURL("image/webp").indexOf("data:image/webp")},
      getRandomInRange(min, max){return Math.floor(Math.random() * (max - min + 1)) + min}
    },
  },
})
export default store;
