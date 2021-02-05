import $ from 'dom7';


export function s_tabs(page) {
let pageEl = $('.'+page);
let wHeight = window.innerHeight;
let ms = {
    el:$('#mainScreen'),
    height(){return this.el},
}
let scroll = pageEl.scrollTop();

console.log(ms.height());
}