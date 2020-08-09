import React, { useState } from 'react';
import ErrorPage from './views/ErrorPage';
import HomePage from './views/HomePage';
import DetailPage from './views/DetailPage';
import FavoritePage from './views/FavoritePage';
import NavbarHome from './components/NavbarHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'

import store from './redux/stores'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  const [detailShow, setDetailShow] = useState(false)

  return (
    <Provider store={store}>
      <Router>
        <NavbarHome setDetailShow={setDetailShow} />
        <Switch>
          <Route exact path="/">
            <HomePage detailShow={detailShow} setDetailShow={setDetailShow} />
          </Route>
          <Route path="/detail/:id" component={DetailPage} />
          <Route path="/deck" component={FavoritePage} />
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </Provider >
  )
}

export default App;
