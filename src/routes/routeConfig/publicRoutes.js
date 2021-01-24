import { Playground, History } from '../../modules';

const publicRoutes = [
  {
    key: 'root',
    component: Playground,
    path: '/',
    exact: true,
  },
  {
    key: 'playground',
    component: Playground,
    path: '/playground',
    exact: true,
  },
  {
    key: 'history',
    component: History,
    path: '/history',
    exact: true,
  },
];

export default publicRoutes;
