import VueRouter from 'vue-router';

export default new VueRouter({
routes:[
   {
       path: '/',
       name: 'Home',
       component: () => import('../pages/Home'),
   },
 
]
})