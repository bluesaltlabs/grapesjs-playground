
// Local Constants
import {
  RTE_ACTION_SUBSCRIPT,
} from '../constants'

// Local Helpers
// import {
//   replaceRteAction,
// } from '../helpers'

export function Subscript(rte, config, editor) {
  // replaceRteAction(rte, 'subscript', RTE_ACTION_SUBSCRIPT)

  rte.add(RTE_ACTION_SUBSCRIPT, {
    // order:      6,
    icon:       `<i class="fas fa-subscript"></i>`,
    // icon:       '<b>S<sub>s</sub></b>',
    attributes: { title: 'Subscript' },
    result:     (rte) => { rte.exec('subscript') }
  })
}
