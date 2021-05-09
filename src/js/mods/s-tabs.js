export function s_tabs(page) {
let pageEl = document.querySelector('.'+page)
let wHeight = window.innerHeight
let opacity=0
let ms = {
    el:document.getElementById('mainScreen'),
    height: document.getElementById('mainScreen').offsetHeight
}
let tabsB = {
    el:document.querySelector('.tabsB'),
    height: document.querySelector('.tabsB').offsetHeight
}

let scroll = ()=>{
    return pageEl.scrollTop
};

if (underMs()) {
    tabsB.el.style.opacity='1'
    console.log(1, scroll());
    opacity=1
}else{
    tabsB.el.style.opacity='0'
    console.log(0);
    opacity=0
}

function underMs() {
    let paddind = tabsB.height;
    if ((ms.height - scroll() - wHeight)+paddind < 0) {
        return true
    }
}
}