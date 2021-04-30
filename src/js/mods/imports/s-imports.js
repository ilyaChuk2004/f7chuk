import {s_store_about_imp} from './items/s-store-about-imp'
import store from '../../store';


import {app} from '../../app'

export async function s_imports(e) {
  async function load(whatToLoad){
    let ress=0;
    await app.request.getJSON(`/static/${whatToLoad}.json`).then((res) => {
         ress=res.data
    });
    store.state.data.posts = ress;
    app.emit(`e-${whatToLoad}Loaded`);
  }

  async function posts(){
  let ress=0;
  await app.request.post('https://chuk.dx.am/cock/api/collections/get/name?token=9dde4ae7fbe1301336d54310078f41', 
  {
  filter:{
      published:true
  },
  fields:{
      name:1,
      thumbjpg:1,
      thumbwebp:1,
      postcss:1,
      cursour:1,
      type:1,
      shorttext:1,
      published:1,
      gall:1,
      mainscreen:1
  },
  sort: {_created:-1}
  }
  ) 
    .then(function (res) {
      ress=(JSON.parse(res.data))
    });
    store.state.data.posts = ress.entries;
    app.emit(`e-postsLoaded`);
  }

  async function about(){
    let ress=0;
    await app.request.post('https://chuk.dx.am/cock/api/collections/get/about?token=9dde4ae7fbe1301336d54310078f41', 
    {
    fields:{
        name:1,
        text:1,
    },
    sort: {_created:-1}
    }
    ) 
      .then(function (res) {
        ress=(JSON.parse(res.data))
      });
      store.state.data.about = ress.entries;
      app.emit(`e-aboutLoaded`);
    }



  await posts()
  await about()

    // let arr = ['posts'];




  s_store_about_imp();
}