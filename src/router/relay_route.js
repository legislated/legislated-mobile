// @flow
import React, { Component } from 'react'
import Relay from 'react-relay'
import { Route } from 'react-router'
import type { RouteProps } from 'react-router'

type QueryConfig = {
  name: string,
  queries: { [key: string]: Function }
}

type RendererOptions = {
  forceFetch?: boolean,
} & QueryConfig

export class RelayRoute extends Component {
  props: RouteProps & RendererOptions

  render () {
    const { name, queries, forceFetch, ...routeProps } = this.props

    // wrap container in renderer
    const { component: Container } = routeProps
    const Renderer = () => {
      return <Relay.Renderer
        Container={Container}
        environment={Relay.Store}
        queryConfig={{ name, queries, params: {} }}
        forceFetch={forceFetch}
        render={({ done, error, props, retry, stale }) => {
          if (error && retry) {
            console.log('Relay.Error: ', error, props)
          } else if (props) {
            return <Container {...props} />
          } else {
            console.log('Relay.Loading...')
          }
        }}
      />
    }

    return <Route {...routeProps} component={Renderer} />
  }
}
