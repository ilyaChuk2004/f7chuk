
import { createStore } from 'framework7';


const store = createStore({
  state: {
    appData:{
      tab:'1',
      events:{
        
      },
    },
    data:{
      contacts:[
        {text:'телеграм',
        href:'https://chuk.dx.am',
        disc:'написать мне',
        btn_bgcol:'#00a2ff'},
        {text:'фрилансхант',
        href:'https://chuk.dx.am',
        disc:'заказать работу',
        btn_bgcol:'#c3ae19'},

      ]
    }
  },
})
export default store;
