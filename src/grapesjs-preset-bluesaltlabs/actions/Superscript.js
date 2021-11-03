
// Local Constants
import {
  RTE_ACTION_SUPERSCRIPT,
} from '../constants'

// Local Helpers
// import {
//   replaceRteAction,
// } from '../helpers'

export function Superscript(rte, config, editor) {
  // replaceRteAction(rte, 'superscript', RTE_ACTION_SUPERSCRIPT)

  rte.add(RTE_ACTION_SUPERSCRIPT, {
    // order:      5,
    // icon:       '<b>S<sup>s</sub></b>',
    icon:       `<i class="fas fa-superscript"></i>`,
    attributes: { title: 'Superscript' },
    result:     (rte) => { rte.exec('superscript') }
  })
}
