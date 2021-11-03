// Local Constants
import {
  CMD_STORE,
} from '../constants'

export function Store(commandManager, config, editor) {
  commandManager.add(CMD_STORE, {
    run(editor, sender) {
      sender && sender.hasOwnProperty('set') && sender.set('active', 0)
      editor.store()
    },
    stop(editor, sender) {}
  })
}

export default Store
