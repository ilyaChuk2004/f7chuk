import store from '../../store';
import { app } from '../../app'

export async function s_imports(e) {
  
  async function posts() {
    let ress = 0;
    await app.request.post('https://chuk.dx.am/cock/api/collections/get/name?token=9dde4ae7fbe1301336d54310078f41',
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
      });
    store.state.data.posts = ress.entries;
    app.emit(`e-postsLoaded`);
  }
  async function about() {
    let ress = 0;
    await app.request.post('https://chuk.dx.am/cock/api/collections/get/about?token=9dde4ae7fbe1301336d54310078f41',
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
      });
    store.state.data.about = ress.entries;
    app.emit(`e-aboutLoaded`);
  }
  async function pngs() {
    let ress = 0;
    await app.request.get('https://chuk.dx.am/cock/api/collections/get/pngs?token=9dde4ae7fbe1301336d54310078f41')
      .then(function (res) {
        ress = (JSON.parse(res.data))
      });
    store.state.data.pngs = ress.entries;
    app.emit(`e-pngsLoaded`);
  }

  await about()
  await posts()
  await pngs()
}