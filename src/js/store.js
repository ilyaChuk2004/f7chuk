
import { createStore } from 'framework7';


const store = createStore({
  state: {
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
        name:'trip',
        name_ru:'трип',
        img_png(){return `/static/img/${this.name}/${this.name}.png`},
        img_jpg(){return `/static/img/${this.name}/${this.name}.jpg`},
        img_webp(){return `/static/img/${this.name}/${this.name}.webp`},
        h_box_shadow:'rgb(15 255 75 / 39%) 0px 24px 50px -7px',
        cursor(){return `url(/static/img/${this.name}/${this.name}Cur.cur), auto;`},
        h_filter:'animation: tripPrewAni 2s ease infinite',
        h_animation:'@keyframes tripPrewAni {from{filter:hue-rotate(0deg);}50%{filter:hue-rotate(180deg);} to{filter:hue-rotate(0deg);}}'
      },
      {
        name:'medKit',
        name_ru:'сборка медитаций',
        img_png(){return `/static/img/${this.name}/${this.name}.png`},
        img_jpg(){return `/static/img/${this.name}/${this.name}.jpg`},
        img_webp(){return `/static/img/${this.name}/${this.name}.webp`},
        h_box_shadow:'rgba(178, 208, 255, 0.39) 0px 24px 50px -7px',
        cursor(){return `url(/static/img/${this.name}/${this.name}Cur.cur), auto;`},
        h_filter:'filter: saturate(3)',
        h_animation:''
      },
      {
        name:'ksch',
        name_ru:'КСЧ',
        img_png(){return `/static/img/${this.name}/${this.name}.png`},
        img_jpg(){return `/static/img/${this.name}/${this.name}.jpg`},
        img_webp(){return `/static/img/${this.name}/${this.name}.webp`},
        h_box_shadow:'rgba(46, 53, 255, 0.42) 0 24px 50px -7px',
        cursor(){return `url(/static/img/${this.name}/${this.name}Cur.cur), auto;`},
        h_filter:'filter: hue-rotate(125deg)',
        h_animation:''
      },
      {
        name:'single',
        name_ru:'историческая запись',
        img_png(){return `/static/img/${this.name}/${this.name}.png`},
        img_jpg(){return `/static/img/${this.name}/${this.name}.jpg`},
        img_webp(){return `/static/img/${this.name}/${this.name}.webp`},
        h_box_shadow:'rgba(132, 117, 91, 0.75) 0 24px 50px -7px',
        cursor(){return `url(/static/img/${this.name}/${this.name}Cur.cur), auto;`},
        h_filter:'filter: sepia(3.6)',
        h_animation:''
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
