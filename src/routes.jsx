import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ListPage from './components/restaurantList/ListPage';
import AboutPage from './components/about/AboutPage';
import DetailsPage from './components/details/DetailsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="listPage" component={ListPage} />
    <Route path="detalsPage/:restaurantId" component={DetailsPage} />
  </Route>

  );
