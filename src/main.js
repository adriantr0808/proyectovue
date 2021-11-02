import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/navegacion/Home';
import Musica from './components/navegacion/Musica';
import Cine from './components/navegacion/Cine';
import Television from './components/navegacion/Television';
import Ciclovida from './components/Ciclovida';
import Juegos from './components/JuegosConmutados';
import Directivas from './components/Directivas';


Vue.config.productionTip = false


//DEBEMOS DAR DE ALTA LA TECNOLOGIA DENTRO DEL SERVIDOR
Vue.use(VueRouter);

//NECESITAMOS TENER UN ARRAY CON TODAS LAS RUTAS DEL SERVIDOR
const routes = [
  { path: '/home', component: Home },
  { path: '/ciclovida', component: Ciclovida },
  { path: '/cine', component: Cine },
  { path: '/juegosconmutados', component: Juegos },
  { path: '/musica', component: Musica },
  { path: '/tv', component: Television },
  { path: '/directivas', component: Directivas },
  { path: '/', component: Home }
]

//DEBEMOS CREAR UN OBJETO router DE LA CLASE
//VueRouter QUE CONTIENE LAS RUTAS Y EL MODO DE NAVEGACION

const router = new VueRouter({
  routes,
  mode: 'history'
});

//DEBEMOS DAR DE ALTA DEL OBJETO ROUTER AL CREAR LA APP

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
