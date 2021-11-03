
// Local Constants
import {
  RTE_ACTION_ITALIC,
} from '../constants'

// Local Helpers
// import {
//   replaceRteAction,
// } from '../helpers'

export function Italic(rte, config, editor) {
  // replaceRteAction(rte, 'italic', RTE_ACTION_ITALIC)

  rte.add(RTE_ACTION_ITALIC, {
    // order:      2,
    icon:       '<i class="fas fa-italic"></i>',
    attributes: { title: 'Italic' },
    result:     (rte) => { rte.exec('italic') }
  })
}
