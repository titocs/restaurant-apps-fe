import FirstPage from '../views/pages/first-page';
import Detail from '../views/pages/detail';
import RestoFavorit from '../views/pages/resto-favorit';

const routes = {
  '/': FirstPage,
  '/resto-favorit': RestoFavorit,
  '/detail/:id': Detail,
};

export default routes;
