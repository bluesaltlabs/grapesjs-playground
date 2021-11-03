
// Local Constants
import {
  RTE_ACTION_LIST_UNORDERED,
} from '../constants'

// Local Helpers
// import {
//   replaceRteAction,
// } from '../helpers'

export function ListUnordered(rte, config, editor) {
  // replaceRteAction(rte, 'unorderedList', RTE_ACTION_LIST_UNORDERED)

  rte.add(RTE_ACTION_LIST_UNORDERED, {
    // order:      11,
    icon:       '<i class="fas fa-list-ul"></i>',
    attributes: { title: 'Unordered List' },
    result:     (rte) => { rte.exec('insertUnorderedList') }
  })
}
