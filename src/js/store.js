
import { createStore } from 'framework7';


const store = createStore({
  state: {
    count: 10,
    appData: {
      tab: '1',
      events: {},
      taken:'a2ec067e66c2cf479a189b5284bde3',
      url:'chuk.dx.am',
      cockUrlGet:`/cock/api/collections/get/`,
      lastLike:0,     //id поcта где был последний поставлен лайк юзером
      msvidoeplayed:false, //если видео на главном экране проигралось
      activeCategory: 'all',
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
      posts:[],
      pngs:[],
      categories:[
        {
          name:'all',
          runame:'всё',
          num:10
        },
        {
          name:'order',
          runame:'заказы',
          num:2
        },
        {
          name:'update',
          runame:'обновления',
          num:5
        },
        {
          name:'mywork',
          runame:'свои проекты',
          num:9
        },
      ]
    },
    gf:{
      support_format_webp(){var elem=document.createElement("canvas");return!(!elem.getContext||!elem.getContext("2d"))&&0==elem.toDataURL("image/webp").indexOf("data:image/webp")},
      getRandomInRange(min, max){return Math.floor(Math.random() * (max - min + 1)) + min},
      getCookie(name) {let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : void 0},
      setCookie(name, value, options = {}) {
        (options = {
          path: "/",
          ...options
        }).expires instanceof Date && (options.expires = options.expires.toUTCString());
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        for (let optionKey in options) {
          updatedCookie += "; " + optionKey;
          let optionValue = options[optionKey];
          !0 !== optionValue && (updatedCookie += "=" + optionValue)
        }
        document.cookie = updatedCookie
      }
    },
  },
})
export default store;
