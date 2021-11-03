
// Local Constants
import {
  RTE_ACTION_BOLD,
} from '../constants'

// Local Helpers
// import {
//   replaceRteAction,
// } from '../helpers'

export function Bold(rte, config, editor) {
  // replaceRteAction(rte, 'bold', RTE_ACTION_BOLD)

  rte.add(RTE_ACTION_BOLD, {
    // order:      1,
    icon:       '<i class="fas fa-bold"></i>',
    attributes: { title: 'Bold' },
    result:     (rte) => { rte.exec('bold') },
  })
}
