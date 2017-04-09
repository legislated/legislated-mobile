// @flow
import type { Connection } from './Connection'
import type { Bill } from './bill'

export type Viewer = {
  id: string,
  bills: Connection<Bill>
}
