import store from '../../../store';


import {app} from '../../../app.js'


export function s_store_about_imp(callback) {
     app.request.getJSON('/static/posts.json')
    .then(function (res) {
        let req = res.data;
        store.state.data.about=Object.entries(req)[0][1];

        let st = store.state.data.about;
        

        if (callback != undefined) {
            callback();
        }

        app.emit('e-tabShow', st);

        

    }); 

    
}