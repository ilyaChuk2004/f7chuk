import { app } from '../../js/app'

import store from '../../js/store'

export async function likeLogic(id, likes) {
  likes = +likes

  if (store.state.appData.lastLike + 700 < +new Date) {

    if (store.state.gf.getCookie(`m-like-${id}`) == undefined || store.state.gf.getCookie(`m-like-${id}`) == '0') {

      navigator.vibrate(100)
      document.querySelector('.like').style.animation = 'like 0.5s ease forwards'
      store.state.gf.setCookie(`m-like-${id}`, '1');

      app.request.getJSON(`https://${store.state.appData.url}${store.state.appData.cockUrlGet}name?token=${store.state.appData.taken}`, {
        filter: {
          _id: id
        },
        fields: {
          likes: 1
        }
      }).then((res) => {
        let rlikes = +res.data.entries[0].likes
        app.emit('e-liked', rlikes + 1);

        app.request.post(`https://${store.state.appData.url}/cock/api/collections/save/name?token=66bf7825cc605231eccd49b4dfaad7`, {
          data: {
            _id: id,
            likes: rlikes + 1
          }
        })
      })

    } else {
      document.querySelector('.like').style.animation = 'Rlike 0.5s ease forwards'
      store.state.gf.setCookie(`m-like-${id}`, '0');

      app.request.getJSON(`https://${store.state.appData.url}${store.state.appData.cockUrlGet}name?token=${store.state.appData.taken}`, {
        filter: {
          _id: id
        },
        fields: {
          likes: 1
        }
      }).then((res) => {
        let rlikes = +res.data.entries[0].likes
        app.emit('e-liked', rlikes - 1);

        app.request.post(`https://${store.state.appData.url}/cock/api/collections/save/name?token=66bf7825cc605231eccd49b4dfaad7`, {
          data: {
            _id: id,
            likes: rlikes - 1
          }
        })
      })

    }


    store.state.appData.lastLike = +new Date
  }

}