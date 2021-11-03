// Local Constants
import {
  EVENT_STOP,
} from '../constants'

export function Stop(eventManager, config, editor) {
  if(config?.logAllEvents) {
    editor.on(EVENT_STOP, (commandID) => {
      console.debug(`Stop: ${commandID}`)
    })
  }
}

export default Stop
