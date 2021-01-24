import { Playground, History } from '../../modules';
import { Default } from '../../layouts';

const publicRoutes = [
  {
    key: 'root',
    component: Playground,
    layout: Default,
    path: '/',
    exact: true,
  },
  {
    key: 'playground',
    component: Playground,
    layout: Default,
    path: '/playground',
    exact: true,
  },
  {
    key: 'history',
    component: History,
    layout: Default,
    path: '/history',
    exact: true,
  },
];

export default publicRoutes;
