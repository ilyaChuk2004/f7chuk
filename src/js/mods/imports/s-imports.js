import store from '../../store';
import { app } from '../../app'

export async function s_imports(e) {
  
  async function posts() {
    let ress = 0;
    if (navigator.onLine) {
      await app.request.post(`https://${store.state.appData.url}${store.state.appData.cockUrlGet}name?token=${store.state.appData.taken}`,
      {
        filter: {
          published: true
        },
        fields: {
          name: 1,
          thumbjpg: 1,
          thumbwebp: 1,
          postcss: 1,
          cursour: 1,
          type: 1,
          shorttext: 1,
          published: 1,
          gall: 1,
          mainscreen: 1
        },
        sort: { _created: -1 }
      }
    )
      .then(function (res) {
        ress = (JSON.parse(res.data))
        store.state.data.posts = ress.entries;
        localStorage.posts=JSON.stringify(ress.entries);
        app.emit(`e-postsLoaded`);
      });
    }else{
      console.log('try to load by cache');

      store.state.data.posts = JSON.parse(localStorage.posts);
      app.emit(`e-postsLoaded`);
    }
  }

  async function about() {
    let ress = 0;
    if (navigator.onLine) {
      await app.request.post(`https://${store.state.appData.url}${store.state.appData.cockUrlGet}about?token=${store.state.appData.taken}`,
      {
        fields: {
          name: 1,
          text: 1,
        },
        sort: { _created: -1 }
      }
    )
      .then(function (res) {
        ress = (JSON.parse(res.data))
        store.state.data.about = ress.entries;
        localStorage.about=JSON.stringify(ress.entries);
        app.emit(`e-aboutLoaded`);
      });
    }else{
      store.state.data.about = JSON.parse(localStorage.about);
      app.emit(`e-aboutLoaded`);
    }
  }
  async function pngs() {
    let ress = 0;
    if (navigator.onLine) {
      await app.request.get(`https://${store.state.appData.url}${store.state.appData.cockUrlGet}pngs?token=${store.state.appData.taken}`)
      .then(function (res) {
        ress = (JSON.parse(res.data))
        store.state.data.pngs = ress.entries;
        window.store=store
        localStorage.pngs=JSON.stringify(ress.entries);
        app.emit(`e-pngsLoaded`);
      })
    }else{
      store.state.data.pngs = JSON.parse(localStorage.pngs);
      app.emit(`e-pngsLoaded`);
    }
  }

  await about()
  await posts()
  await pngs()

}