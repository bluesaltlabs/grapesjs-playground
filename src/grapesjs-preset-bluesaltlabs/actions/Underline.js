
// Local Constants
import {
  RTE_ACTION_UNDERLINE,
} from '../constants'

// Local Helpers
// import {
//   replaceRteAction,
// } from '../helpers'

export function Underline(rte, config, editor) {
  // replaceRteAction(rte, 'underline', RTE_ACTION_UNDERLINE)

  rte.add(RTE_ACTION_UNDERLINE, {
    // order:      3,
    icon:       '<i class="fas fa-underline"></i>',
    attributes: { title: 'Underline' },
    result:     (rte) => { rte.exec('underline') }
  })
}
