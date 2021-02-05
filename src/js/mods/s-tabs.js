import $ from 'dom7';


export function s_tabs(page) {
let pageEl = $('.'+page);
let wHeight = window.innerHeight;
let ms = {
    el:$('#mainScreen'),
    height(){return this.el.height()},
}
let tabsB = {
    el:$('.tabsB'),
    height(){return this.el.height()},
}
let scroll = ()=>{
    return pageEl.scrollTop()
};

if (underMs()) {
    tabsB.el.css('opacity','1');
}else{
    tabsB.el.css('opacity','0');

}

function underMs() {
    let paddind = tabsB.height();
    if ((ms.height() - scroll() - wHeight)+paddind < 0) {
        return true
    }else false
}
}