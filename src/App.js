import React from 'react';
import { Route, Redirect, Switch,Link,NavLink,withRouter } from 'react-router-dom';

import Home from './pages/Home.js';
import Jointrent from './pages/Jointrent.js';
import Entiretenancy from './pages/Entiretenancy.js';
import Ownertojoin from './pages/Ownertojoin.js';
import Housingresource from './pages/Housingresource.js';

function App() {
  return (
    <div className="App">
      <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/jointrent" component={Jointrent}/>
                <Route path="/entiretenancy" component={Entiretenancy}/>
                <Route path="/ownertojoin" component={Ownertojoin}/>
                <Route path="/housingresource" component={Housingresource}/>
                <Redirect from="/" to="/home" exact/>
                <Route render={() => <div><h1>404</h1>页面不存在</div>} />
    
      </Switch>
    </div>
  );
}

export default App;
