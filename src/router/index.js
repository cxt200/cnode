import React from 'react'
import { HashRouter, Switch, Route} from 'react-router-dom'
import HomePage from '../views/index/Index'
import Header from '../components/header/Header'


const Routes = () => {
    return (
        <HashRouter>
            <div className="router-view">
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} />
                    <Route path="/cxt" component={Header} />
                </Switch>
            </div>
        </HashRouter> 
    )
}

export default Routes


