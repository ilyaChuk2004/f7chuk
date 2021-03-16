import $ from 'dom7';
import {s_tabs} from '../s-tabs'
import {s_ms_tips} from '../s-ms-tips'

export function s_scroll_event(e) {

    document.addEventListener('scroll', function (event) {
      console.log(event.target.className);
        if (event.target.className.includes('page-content') && event.target.className.includes('home')) { // or any other filtering condition        
          s_tabs('page-content');
        }
    }, true /*Capture event*/);

    $(document).on('click','.mainScreen-tip', (e)=>{
      s_ms_tips(e);
    });
    
}