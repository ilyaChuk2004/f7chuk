import store from '../../../store.js';


import {app} from '../../../app.js'


export function s_store_about_imp(e) {
     app.request.getJSON('/static/data.json')
    .then(function (res) {
        let req = res.data;
        store.state.data.about=Object.entries(req)[0][1];
        console.log(store.state.data.about);
    }); 

    
}