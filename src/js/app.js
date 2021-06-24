import $ from 'dom7';
import Framework7 from 'framework7/bundle';

import 'framework7/framework7-bundle.css';

import '../css/icons.css';
import '../css/app.less';

import routes from './routes.js';

import store from './store.js';

import App from '../app.f7.html';

import { s_components_import } from './mods/imports/s_components_import'
s_components_import();

var app = new Framework7({
  name: 'Чук',
  theme: 'ios',
  el: '#app',
  component: App,
  view: {
    browserHistory:true,
    iosSwipeBack:true,
    preloadPreviousPage:true,
    stackPages:true,
    browserHistoryAnimate:true,
    
  },

  store: store,
  routes: routes,
  touch: {
    mdTouchRipple:true,
    iosTouchRipple:true,
    auroraTouchRipple:true,
    disableContextMenu:true,
    touchRippleElements:'.ripple, .ripple-dark-white',
    // activeStateOnMouseMove:true,
  },
  lazy: {
    placeholder:'/static/img/loading.webp'
  },

  toolbar: {
    hideOnPageScroll: true,
  },

  serviceWorker: {
    path: '/service-worker.js',
  },
});

export { app, }

window.app=app
store.state.appData.desktop = Framework7.device.desktop;
store.state.appData.theme = Framework7.device.prefersColorScheme();

import { s_theme_color_init } from './mods/s-theme-color-init'; s_theme_color_init(Framework7);

////events 
import { s_scroll_event } from './mods/events/s-scroll-event'; s_scroll_event()
///////events

// import to store
import { s_imports } from './mods/imports/s-imports'; await s_imports()
// //import to store

//отменяет перетаскивание мышкой ссылок и картинок
$(document).on("dragstart", 'img, a', function(event) { event.preventDefault(); }); 