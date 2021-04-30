import store from '../../store';
import { s_store_about_imp } from '../imports/items/s-store-about-imp'

export function s_tab_show(e, callback) {

  if (e) {
    store.state.appData.tab = e.target.id.slice(-1);
  }

  if (callback != undefined) {
    s_store_about_imp(callback())
  } else {
    s_store_about_imp()
  }


}