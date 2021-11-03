// Local Constants
import {
  EVENT_RUN,
} from '../constants'

export function Run(eventManager, config, editor) {
  if(config?.logAllEvents) {
    editor.on(EVENT_RUN, (commandID) => {
      console.debug(`Run: ${commandID}`)
    })
  }
}

export default Run
