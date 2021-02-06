import $ from 'dom7';


export function s_ms_tips() {
    let tipEl = e.target;
    let tipId = tipEl.getAttribute('href').slice(-1);

    let tabEl = $(`.tabsB-item[href='#tab${tipId}']`);
    tabEl.addClass('tab-link-active');
    
}