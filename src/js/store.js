
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
          img: 'telegIco.svg',
        },
        {
          text: 'фрилансхант',
          href: 'https://chuk.dx.am',
          disc: 'заказать работу',
          btn_bgcol: '#c3ae19',
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
      },
      {
        name:'medKit',
        name_ru:'сборка медитаций',
        img_png(){return `/static/img/${this.name}/${this.name}.png`},
        img_jpg(){return `/static/img/${this.name}/${this.name}.jpg`},
        img_webp(){return `/static/img/${this.name}/${this.name}.webp`},
      },
      {
        name:'ksch',
        name_ru:'КСЧ',
        img_png(){return `/static/img/${this.name}/${this.name}.png`},
        img_jpg(){return `/static/img/${this.name}/${this.name}.jpg`},
        img_webp(){return `/static/img/${this.name}/${this.name}.webp`},
      },
      {
        name:'single',
        name_ru:'историческая запись',
        img_png(){return `/static/img/${this.name}/${this.name}.png`},
        img_jpg(){return `/static/img/${this.name}/${this.name}.jpg`},
        img_webp(){return `/static/img/${this.name}/${this.name}.webp`},
      },
    ]
  }
  },
})
export default store;
