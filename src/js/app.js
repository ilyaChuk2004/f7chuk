import $ from 'dom7';
import Framework7 from 'framework7/bundle';

// Import F7  Styles    
import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.less';


// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';

// Import main app component
import App from '../app.f7.html';

import { s_components_import } from './mods/imports/s_components_import'
s_components_import();

var app = new Framework7({
  name: 'chuk', // App name
  theme: 'ios', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component
  view: {
    browserHistory:true,
    iosSwipeBack:false,
    // preloadPreviousPage:false,
    // stackPages:false,
    browserHistoryAnimate:false,
    animate:false
  },

  // App store
  store: store,
  // App routes
  routes: routes,
  touch: {
    // mdTouchRipple:true,
    // iosTouchRipple:true,
    auroraTouchRipple:false,
    disableContextMenu:true,
    touchRippleElements:'.ripple, .ripple-dark-white',
    // activeStateOnMouseMove:true,
  },
  lazy: {

    placeholder:'/static/img/ww2.png'
  },

  toolbar: {
    hideOnPageScroll: true,
  },

  navbar: {
    showOnPageScrollEnd: false,
    hideOnPageScroll: true
  },

  // Register service worker
  serviceWorker: {
    path: '/service-worker.js',
  },
});

export { app, }



store.state.appData.desktop = Framework7.device.desktop;

import { s_theme_color_init } from './mods/s-theme-color-init'
s_theme_color_init();

////events 
import { s_scroll_event } from './mods/events/s-scroll-event'
s_scroll_event();
///////events

// import to store
import { s_imports } from './mods/imports/s-imports'
await s_imports();
// //import to store

$(document).on("dragstart", 'img, a', function(event) { event.preventDefault(); });


// console.log(store);
window.store = store;
window.app = app;