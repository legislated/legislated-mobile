// @flow
import React, { Component } from 'react'
import Relay from 'react-relay'
import { StyleSheet, Text } from 'react-native'
import type { Viewer, RelayProp } from '../../types'

// import { throttle } from 'lodash'
// import { StyleSheet, View } from 'react-native';
// import moment from 'moment'
// import SearchField from './components/search_field'
// import BillCell from './components/bill_cell'
// import LoadMoreButton from './components/load_more_button'
// import type { Viewer, RelayProp } from '../../types'
// import { unwrap } from '../../types/connection'

// const pageSize = 25

class BillsView extends Component {
  props: {
    viewer: Viewer,
    relay: RelayProp
  }

  // state = {
  //   query: ''
  // }
  //
  // // events
  // didClickLoadMore = () => {
  //   const { relay } = this.props
  //   relay.setVariables({ first: relay.variables.first + pageSize })
  // }
  //
  // searchFieldDidChange = (query) => {
  //   this.setState({ query })
  //   this.fetchBillsForQuery(query)
  // }
  //
  // fetchBillsForQuery = throttle((query) => {
  //   this.props.relay.setVariables({ query })
  // }, 300)

  // lifecycle
  render () {
    return <Text style={styles.text}>Hello, viewer {this.props.viewer}.</Text>

    // const { query } = this.state
    // const bills = unwrap(this.props.viewer.bills)
    // const hasNextPage = bills.pageInfo && bills.pageInfo.hasNextPage
    //
    // return <View style={styles.container}>
    //   <SearchField style={styles.searchField} value={query} onChange={this.searchFieldDidChange} />
    //   {bills.nodes.map((bill, i) => {
    //     return (<BillCell key={bill.id} bill={bill} isLast={i === bills.nodes.length - 1} />);
    //   })}
    //   <LoadMoreButton style={styles.loadMoreButton} hasMore={hasNextPage} onClick={this.didClickLoadMore} />
    // </View>
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 1
  }
  // container: {
  //   flex: 1,
  //   alignItems: 'stretch'
  // },
  // searchField: {
  //   marginBottom: 30
  // },
  // loadMoreButton: {
  //   alignSelf: 'center',
  //   marginTop: 30
  // }
})

export const BillsContainer = Relay.createContainer(BillsView, {
  // initialVariables: {
  //   first: pageSize,
  //   query: '',
  //   startDate: '',
  //   endDate: ''
  // },
  // prepareVariables: (previousVariables) => {
  //   return {
  //     first: previousVariables.first,
  //     query: previousVariables.query,
  //     startDate: moment().startOf('day'),
  //     endDate: moment().add(6, 'days').endOf('day')
  //   }
  // },
  // fragments: {
  //   viewer: (variables) => Relay.QL`
  //     fragment on Viewer {
  //       bills(first: $first, from: $startDate, to: $endDate, query: $query) {
  //         edges {
  //           node {
  //             id
  //             ${BillCell.getFragment('bill')}
  //           }
  //         }
  //         pageInfo {
  //           hasNextPage
  //         }
  //       }
  //     }
  //   `
  // }
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id
      }
    `
  }
})
