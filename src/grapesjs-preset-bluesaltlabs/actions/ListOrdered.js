
// Local Constants
import {
  RTE_ACTION_LIST_ORDERED,
} from '../constants'

// Local Helpers
// import {
//   replaceRteAction,
// } from '../helpers'

export function ListOrdered(rte, config, editor) {
  // replaceRteAction(rte, 'orderedList', RTE_ACTION_LIST_ORDERED)

  rte.add(RTE_ACTION_LIST_ORDERED, {
    // order:      10,
    icon:       '<i class="fas fa-list-ol"></i>',
    attributes: { title: 'Ordered List' },
    result:     (rte) => { rte.exec('insertOrderedList') }
  })
}
