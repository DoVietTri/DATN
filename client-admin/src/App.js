import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Admin from './layouts/Admin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import Login from './layouts/Login';
import Dashboard from './views/Dashboard/Dashboard';
import Userprofile from './views/Userprofile/Userprofile';
import Category from './views/Category/Category';
import CategoryAdd from './views/Category/CategoryAdd';
import CategoryEdit from './views/Category/CategoryEdit';
import Product from './views/Product/Product';
import ProductAdd from './views/Product/ProductAdd';
import Author from './views/Author/Author';
import AuthorAdd from './views/Author/AuthorAdd';

const hist = createBrowserHistory();

const App = () => {
  return (
    <Router history={hist}>
      <PublicRoute exact path="/" component={Login} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} layout={Admin} /> 
      <PrivateRoute exact path="/profile" component={Userprofile} layout={Admin} />
      <PrivateRoute exact path="/categories" component={Category} layout={Admin} />
      <PrivateRoute exact path="/categories/add" component={CategoryAdd} layout={Admin} />
      <PrivateRoute exact path="/categories/edit/:id" component={CategoryEdit} layout={Admin} />
      <PrivateRoute exact path="/products" component={Product} layout={Admin} />
      <PrivateRoute exact path="/products/add" component={ProductAdd} layout={Admin} />
      <PrivateRoute exact path="/authors" component={Author} layout={Admin} />
      <PrivateRoute exact path="/authors/add" component={AuthorAdd} layout={Admin} />
    </Router>
  );
}

export default App;
