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
    setTimeout(() => {
    app.emit(`e-${whatToLoad}Loaded`);
      
    }, 7000);
  }

    let arr = ['posts'];
    for (let index = 0; index < arr.length; index++) {
      const el = arr[index];
      load(el);
    }



  s_store_about_imp();
}