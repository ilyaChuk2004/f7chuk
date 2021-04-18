import {app} from '../../js/app'
import $ from 'dom7';
import store from '../../js/store';

export function bold(items) {
    let too = `too${store.state.gf.getRandomInRange(0,10000000000)}`;

    setTimeout(() => {
      var tooltip = app.tooltip.create({
        targetEl: `.${too}.toolt`,
        text:items[2],
        on: {
          show: function () {
            console.log('Tooltip became visible')
          }
        }
      })
    }, 20);

    let res=`
    <strong class="${too} toolt">${items[1]}</strong>`;
return res
}