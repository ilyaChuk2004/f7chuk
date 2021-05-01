import store from '../../store';

export function s_tab_show(e) {
  if (e) {
    store.state.appData.tab = e.target.id.slice(-1);
  }
}