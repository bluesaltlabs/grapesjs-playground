
// Local Constants
import {
  RTE_ACTION_INDENT_LESS,
} from '../constants'

// Local Helpers
// import {
//   replaceRteAction,
// } from '../helpers'

export function IndentLess(rte, config, editor) {
  // replaceRteAction(rte, 'outdent', RTE_ACTION_INDENT_LESS)

  rte.add(RTE_ACTION_INDENT_LESS, {
    // order:      9,
    icon:       '<i class="fas fa-outdent"></i>',
    attributes: { title: 'Indent Less' },
    result:     (rte) => { rte.exec('indentLess') }
  })
}
