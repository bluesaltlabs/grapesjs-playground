
// Local Constants
import {
  RTE_ACTION_STRIKE_THROUGH,
} from '../constants'

// Local Helpers
// import {
//   replaceRteAction,
// } from '../helpers'

export function StrikeThrough(rte, config, editor) {
  // replaceRteAction(rte, 'strikethrough', RTE_ACTION_STRIKE_THROUGH)

  rte.add(RTE_ACTION_STRIKE_THROUGH, {
    // order:      4,
    icon:       '<i class="fas fa-strikethrough"></i>',
    attributes: { title: 'Strike-through' },
    result:     (rte) => { rte.exec('strikeThrough') }
  })
}
