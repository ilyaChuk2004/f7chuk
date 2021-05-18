import { app } from '../../js/app'
import store from '../../js/store';

export function parallax(what, side, items, postname) {
  let too = `too${store.state.gf.getRandomInRange(0, 10000000000)}`;
  let res

  console.log(items);
  if (what == 'pic') {
    res = `
    <img src="./static/img/${postname}/${items[0]}" class="paralBlock pp${side} ${items[1]=='inv'?'invertImg':''}">
    `
  }else if(what=='text'){
    res=`<div style=" font-size: ${items[2]};" class="paralBlock pt${side} ${items[1]=='inv'?'invertImg':''}">${items[0]}</div>`
  }
  return res
}