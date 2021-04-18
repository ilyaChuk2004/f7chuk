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

import mainscreen from '../comps/mainScreen/mainScreen.f7.html';
import mainscreenItemDiv from '../comps/mainScreen/mainScreenItemDiv.f7.html';
import mainscreenItemLink from '../comps/mainScreen/mainScreenItemLink.f7.html';
import tabs from '../comps/tabs/tabs.f7.html';
import tabsButt from '../comps/tabs/tabsButt.f7.html';
import tabsButtItem from '../comps/tabs/tabsButtItem.f7.html';
import about from '../comps/about.f7.html';
import rhome from '../comps/rhome.f7.html';
import png from '../comps/png.f7.html';
import contactsBtn from '../comps/contacts/contactsBtn.f7.html';
import contactsPop from '../comps/contacts/contactsPop.f7.html';
import contactsPopSlide from '../comps/contacts/contactsPopSlide.f7.html';
import fab from '../comps/contacts/fab.f7.html';
import pngPost from '../comps/pngPost.f7.html';
import home from '../pages/home.f7.html';
import footer from '../comps/footer.f7.html';

function imp(tag, comp) {
  Framework7.registerComponent(
    'q-' + tag,
    comp
  )
}

imp('mainScreen', mainscreen);
imp('mainScreenItemDiv', mainscreenItemDiv);
imp('mainScreenItemLink', mainscreenItemLink);
imp('tabs', tabs);
imp('tabsButt', tabsButt);
imp('tabsButtItem', tabsButtItem);
imp('about', about);
imp('rhome', rhome);
imp('png', png);
imp('contactsBtn', contactsBtn);
imp('contactsPop', contactsPop);
imp('contactsPopSlide', contactsPopSlide);
imp('fab', fab);
imp('pngPost', pngPost);
imp('home', home);
imp('footer', footer);

var app = new Framework7({
  name: 'chuk', // App name
  theme: 'ios', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component
  view: {
    browserHistory:true,
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
    threshold: 800,
    sequential: true,
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