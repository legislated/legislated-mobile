// @flow
import Relay from 'react-relay'
import { BillsContainer } from './view'

export const billsRoute = {
  component: BillsContainer,
  name: 'Bills',
  queries: {
    viewer: () => Relay.QL`query { viewer }`
  }
}
