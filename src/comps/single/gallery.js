import { app } from '../../js/app'
import $ from 'dom7';
import store from '../../js/store';

export function gallery(items) {
  let arr = items.slice(1).map((it) => `static/img/${it}`)
  let src = [];
  let alt = [];
  let photos = []

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    src.push(element.split(',,')[0]);
    alt.push(element.split(',,')[1]);
    photos.push({ url: src[i], caption: alt[i] })
  }


  let myPhotoBrowserStandalone = app.photoBrowser.create({
    photos: photos,
    theme: 'dark',
    navbar: true,
    toolbar: arr.length > 1 ? true : false,
    routableModals: true,
    expositionHideCaptions: true,
    url: 'img',
    popupCloseLinkText: '<i class="f7-icons">multiply</i>',
    renderNavbar: function () {
      return `
          <div class="navbar navbar-photo-browser navbar-photo-browser-dark">
              <div class="navbar-inner navbar-inner-centered-title sliding">
                <div class="left"><a class="link popup-close wide rem2_4Auto" data-popup=".photo-browser-popup"><i
                        class="f7-icons">${app.device.desktop ? 'multiply' : 'arrow_left'}</i></a></div>
              </div>
            </div>`
    },
    swiper: {
      speed: 300,
      preloadImages: true,
      navigation: {
        nextEl: '.photo-browser-next',
        prevEl: '.photo-browser-prev',
      },
      zoom: {
        maxRatio: 2.4,
      },
      lazy: {
        enabled: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      mousewheel: {
        invert: false,
      },
    },
  });

  myPhotoBrowserStandalone.on('close', function () {
    myPhotoBrowserStandalone.el.style.opacity = '0';
  })

  document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 27) { //esc
      myPhotoBrowserStandalone.close();
      return;
    }
  });

  let id = `q${store.state.gf.getRandomInRange(0, 10000000000)}`;

  window.opo = myPhotoBrowserStandalone;
  $(document).on('click', `#${id}`, () => {
    myPhotoBrowserStandalone.open();
  });

  return `
    <img id="${id}" class="img lazy" data-src="${src[0]}"/>
    <img class="img under lazy" data-src="${src[0]}"/>`
}