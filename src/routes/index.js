import Home from '../pages/home';
import Detail from '../pages/detail';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/detail/:slug',
    exact: true,
    component: Detail,
  },
];

export default Routes;
