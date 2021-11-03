
// Local Constants
import {
  SHOW_LOADING_DEBUG_OUTPUT,
} from '../constants'

export function replaceRteAction(rte, oldActionSlug, newActionSlug, actionConfig) {
  let oldActionConfig = null

  // Backup action config being replaced (if applicable)
  try {
    if(oldActionSlug) {
      oldActionConfig = rte.remove(oldActionSlug)
    }
  } catch (e) {
    if(SHOW_LOADING_DEBUG_OUTPUT) { console.debug(`Could not remove old action: '${oldActionSlug}'.`, { error: e }) }
  }

  try {
    // Remove the config if it already exists
    if( rte.get(newActionSlug) ) { rte.remove(newActionSlug) }

    // add new action with the new action slug and action config
    rte.add(newActionSlug, actionConfig)
  } catch (e) {
    if(SHOW_LOADING_DEBUG_OUTPUT) { console.debug(`Could not add new action: '${newActionSlug}'.`, { error: e }) }

    // todo: not sure if this is a great idea.
    if(oldActionSlug && oldActionConfig) {
      if(SHOW_LOADING_DEBUG_OUTPUT) { console.debug(`Re-adding old action:`) }
      rte.add(oldActionSlug, oldActionConfig)
    }
  }
}
