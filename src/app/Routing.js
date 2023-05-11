import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Main from '../pages/main'

export default function Routing() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Redirect to="/404" />
        </Switch>
    )
}
