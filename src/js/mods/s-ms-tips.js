import $ from 'dom7';
export function s_ms_tips(e) {
    let tipEl = e.target;
    let tipId = tipEl.getAttribute('href').slice(-1);

    let tabEl = $(`.tabsB-item[href='#tab${tipId}']`);
    for (let index = 0; index < tabEl[0].parentElement.children.length; index++) {
        const element = tabEl[0].parentElement.children[index]
        element.classList.remove('tab-link-active')
        element.firstElementChild.innerText=element.firstElementChild.innerText.split('_')[0]
    }
    tabEl[0].firstElementChild.innerText+='_fill'
    tabEl.addClass('tab-link-active');
    
}