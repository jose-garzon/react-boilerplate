// ------------------------------ import libraries
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// ------------------------------ import components
import { Home } from '@pages/Home'

// ------------------------------ import styles
import './style.css'

// ------ COMPONENT ------ //
export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>
)
