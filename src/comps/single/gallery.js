import {app} from '../../js/app'
import $ from 'dom7';
import store from '../../js/store';

export function gallery(items) {
    let arr = items.slice(1).map((it)=>`static/img/${it}`)
    let src=[];
    let alt=[];

    let photos=[]
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        src.push(element.split(',,')[0]);
        alt.push(element.split(',,')[1]);

        photos.push({url:src[i], caption:alt[i]})
    }
    // debugger
    console.log(src, alt);
    let id = `q${store.state.gf.getRandomInRange(0,10000000000)}`;

    let myPhotoBrowserStandalone = app.photoBrowser.create({
        photos: photos,
        theme:'dark',
        navbar:true,
        toolbar:arr.length>1?true:false,
        routableModals:true,
        expositionHideCaptions:true,
        url:'img',
        popupCloseLinkText:'<i class="f7-icons">multiply</i>',
        renderNavbar:function(){
          return `
          <div class="navbar navbar-photo-browser navbar-photo-browser-dark">
              <div class="navbar-inner navbar-inner-centered-title sliding">
                <div class="left"><a class="link popup-close wide rem2_4Auto" data-popup=".photo-browser-popup"><i
                        class="f7-icons">${app.device.desktop?'multiply':'arrow_left'}</i></a></div>
              </div>
            </div>`
        },
        swiper: {
            initialSlide: 0,
            spaceBetween: 20,
            speed: 300,
            loop: false,
            preloadImages: true,
            navigation: {
              nextEl: '.photo-browser-next',
              prevEl: '.photo-browser-prev',
            },
            zoom: {
              enabled: true,
              maxRatio: 2.4,
              minRatio: 1,
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
        // type:'popup'
      });

    myPhotoBrowserStandalone.on('close', function(){
        myPhotoBrowserStandalone.el.style.opacity='0';
      })

      document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 27) { //esc
    myPhotoBrowserStandalone.close();
    return;
  }
  // do something
});
window.opo=myPhotoBrowserStandalone;
$(document).on('click', `#${id}`, ()=> {
    myPhotoBrowserStandalone.open();
  });
    let res=`<img id="${id}" class="img lazy" data-src="${src[0]}"/>
            <img class="img under lazy" data-src="${src[0]}"/>`;
return res
}