// // @flow
// import React, { Component } from 'react'
// import Relay from 'react-relay'
// import { StyleSheet, Text, View } from 'react-native';
// import moment from 'moment'
// import { fonts, colors, shadows, borders } from '../../styles'
// import type { Bill } from '../../../types'
//
// class BillCell extends Component {
//   props: {
//     bill: Bill,
//     isLast: boolean
//   }
//
//   render () {
//     const { bill, isLast } = this.props
//     const date = moment(bill.hearing.date)
//
//     return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.documentNumber}>{bill.documentNumber}</Text>
//         <Text>{bill.title}</Text>
//       </View>
//       <Text style={styles.date}>{date.calendar()}</Text>
//     </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     ...shadows.low,
//     ...borders.low,
//     padding: 15,
//     marginBottom: 15,
//     backgroundColor: colors.neutral
//   },
//   last: {
//     marginBottom: 0
//   },
//   header: {
//     marginBottom: 5
//   },
//   documentNumber: {
//     ...fonts.bold,
//     marginRight: 10
//   }
// })
//
// export default Relay.createContainer(BillCell, {
//   fragments: {
//     bill: () => Relay.QL`
//       fragment on Bill {
//         id
//         title
//         documentNumber
//         hearing {
//           date
//         }
//       }
//     `
//   }
// })
