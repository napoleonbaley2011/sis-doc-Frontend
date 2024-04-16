import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './pages/inicio.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/inicio',
      name: 'inicio',
      component: Inicio
    },
    {
        path: '/documentos',
        name: 'inicio',
        component: inicio
      },
     
    
  ]
});