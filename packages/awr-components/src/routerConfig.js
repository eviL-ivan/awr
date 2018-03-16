// Импорт компонентов
import Home from '../components/Home';

export default [
  {
    key: 'getStart',
    name: 'Начать',
    components: [
      {
        name: 'Home',
        path: '/getting-started/home',
        component: Home,
      },
    ],
  },
  {
    key: 'styles',
    name: 'Стили',
    components: [
      {
        name: 'Home',
        path: '/styles/home',
        component: Home,
      },
    ],
  },
  {
    key: 'componentDemo',
    name: 'Компоненты DEMO',
    components: [
      {
        name: 'Home',
        path: '/demos/home',
        component: Home,
      },
    ],
  },
  {
    key: 'componentApi',
    name: 'Компоненты API',
    components: [
      {
        name: 'Home',
        path: '/api/home',
        component: Home,
      },
    ],
  },
];
