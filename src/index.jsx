import React from 'react';
import { Router } from 'react-router';
import routes from './config/routes';
import createHistory from 'history/lib/createHashHistory';

const history = createHistory({
  queryKey: false
});

React.render(<Router history={history} routes={routes} />, document.body);