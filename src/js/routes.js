
import HomePage from '../pages/home.f7.html';  
import single from '../pages/single.f7.html';  
import rhome from '../comps/rhome.f7.html';
import png from '../comps/png.f7.html';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
    {
      path: '/p/:id/',
      component: single,
      options:{
        // reloadPrevious:true
      },
      beforeEnter:function({resolve, to, from, router}){
        if (document.querySelectorAll('.page[data-name=single]').length>0) {
          document.querySelector('.page[data-name=single]').parentNode.removeChild(document.querySelector('.page[data-name=single]'))
          router.history.splice(router.history.length-1, 1)
        }
        // console.log(to);
        // console.log(from);
        
        resolve()
      }
      // asyncComponent: () => import('../css/singleCss.css')
      
    },
];

export default routes;