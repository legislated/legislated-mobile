// @flow
import React from 'react'
import Relay from 'react-relay'
//import { Router, Route, browserHistory, applyRouterMiddleware } from 'react-router'
//import { NativeRouter, Route, Link, Redirect, withRouter } from 'react-router-native'
import {
  applyRouterMiddleware,
  NativeRouter,
  Router,
  Route,
  useRouterHistory,
  nativeHistory,
} from 'react-router-native';
import useRelay from 'react-router-relay'
import { BillsView, BillsQueries } from '../bills'
import NotFoundView from './not_found_view'

export const AppRouter = () => (
  <NativeRouter history={nativeHistory} render={applyRouterMiddleware(useRelay)} environment={Relay.Store}>
    <Route path='/' component={BillsView} queries={BillsQueries} />
    <Route path='*' component={NotFoundView} />
  </NativeRouter>
)
