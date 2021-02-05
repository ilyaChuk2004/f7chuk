import $ from 'dom7';


export function f(a) {
    document.addEventListener('scroll', function (event) {
        if (event.target.className === 'page-content') { // or any other filtering condition        
            
        }
    }, true /*Capture event*/);
}