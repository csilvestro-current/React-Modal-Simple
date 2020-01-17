import React, { Component } from 'react'
//React Router
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import DetailedView from '../pages/DetailedView';

class Routes extends Component {
    render() {
        return (
            <section className="content main-content">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/DetailedView' component={DetailedView} />
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/Home' component={Home} />
                </Switch>
            </section>
        );
    }
}

export default Routes
