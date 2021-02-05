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

function imp(tag, comp) {
  Framework7.registerComponent(
    'q-'+tag,
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

var app = new Framework7({
  name: 'chuk', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component

  // App store
  store: store,
  // App routes
  routes: routes,
  // Register service worker
  serviceWorker: {
    path: '/service-worker.js',
  },
});