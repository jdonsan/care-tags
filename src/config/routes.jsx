import App from '../layout/App';
import HomeView from '../feature/home/HomeView';
import AboutView from '../feature/about/AboutView';
import TutorialView from '../feature/tutorial/TutorialView';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: HomeView },
  childRoutes: [
    { path: 'about', component: AboutView },
    { path: 'tutorial', component: TutorialView }
  ]
};

export default routes;