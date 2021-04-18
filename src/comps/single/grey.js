import {app} from '../../js/app'
import $ from 'dom7';
import store from '../../js/store';

export function grey(items) {
    let id = `q${store.state.gf.getRandomInRange(0,10000000000)}`;

    let res=`
    <otstup>
      <cent>${items[1]}</cent>
      ${items[2]}
    </otstup>`;
            
return res
}