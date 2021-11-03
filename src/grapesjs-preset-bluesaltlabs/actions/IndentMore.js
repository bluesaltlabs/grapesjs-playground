
// Local Constants
import {
  RTE_ACTION_INDENT_MORE,
} from '../constants'

// Local Helpers
// import {
//   replaceRteAction,
// } from '../helpers'

export function IndentMore(rte, config, editor) {
  // replaceRteAction(rte, 'indent', RTE_ACTION_INDENT)

  rte.add(RTE_ACTION_INDENT_MORE, {
    // order:      8,
    icon:       '<i class="fas fa-indent"></i>',
    attributes: { title: 'Indent More' },
    result:     (rte) => { rte.exec('indentMore') }
  })
}
