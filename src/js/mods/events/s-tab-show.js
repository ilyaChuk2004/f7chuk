import $ from 'dom7';
import store from '../../store';
import {s_store_about_imp} from '../imports/items/s-store-about-imp'
import {app} from '../../app.js'



export function s_tab_show(e, callback) {


  if (e!=0 && e!=false && e!=undefined) {
    store.state.appData.tab=e.target.id.slice(-1);
  }

  app.emit('e-tabShow', function(){
    $update();
});

  if (callback != undefined) {
    s_store_about_imp(callback())
  }else{
    s_store_about_imp()
  }

  
}