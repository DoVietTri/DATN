import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Client from './layouts/Client';
import Account from './views/Account/Account';
import BookDetail from './views/BookDetail/BookDetail';
import Cart from './views/Cart/Cart';
import CategoryDetail from './views/CategoryDetail/CategoryDetail';
import Home from './views/Home/Home';


const App = () => {

  useEffect(() => {
    
  }, []);

  const [totalItem, setTotalItem] = useState( localStorage.getItem('cart') ? JSON.parse( localStorage.getItem('cart')).totalQuantity : 0);

  let countTotalItem = (childData) => {
    setTotalItem(childData);
  }

  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home} layout={Client} cntItem={totalItem} />
        <PublicRoute exact path="/cart" component={Cart} layout={Client} totalItem={countTotalItem} cntItem={totalItem} />
        <PublicRoute exact path="/categories" component={CategoryDetail} layout={Client} cntItem={totalItem} />
        <PublicRoute exact path="/categories/:c_slug" component={BookDetail} layout={Client} totalItem={countTotalItem} cntItem={totalItem} />
        <PrivateRoute exact path="/account" component={Account} layout={Client} cntItem={totalItem} />
      </Switch>
    </Router>
  )
}

export default App;

