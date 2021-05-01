import { app } from '../../js/app'
import store from '../../js/store';

export function bold(items) {
  let too = `too${store.state.gf.getRandomInRange(0, 10000000000)}`;

  setTimeout(() => {
    app.tooltip.create({
      targetEl: `.${too}.toolt`,
      text: items[2]
    })
  }, 200);

  return `
  <strong class="${too} toolt">${items[1]}</strong>`
}