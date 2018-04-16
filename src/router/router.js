import React from 'react';

import {Route, Switch,Redirect} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';


import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';
import HomePage from 'bundle-loader?lazy&name=HomePage!pages/HomePage/HomePage';

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

export default () => (
    <div>
     
        <Switch>
            {/* <Route exact path="/"  render={()=><Redirect to="/parenting/pedia/0" />}  />   */}
            <Route exact path="/" component={createComponent(HomePage)} />／／
            <Route component={createComponent(NotFound)}/>
        </Switch>

     
    </div>
);
