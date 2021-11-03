// Local Constants
import {
  CMD_CORE_CANVAS_CLEAR,
  MSG_CANVAS_CLEAR,
} from '../constants'

export function CanvasClear(commandManager, config, editor) {
  commandManager.add(CMD_CORE_CANVAS_CLEAR, {
    run(editor, sender) {
      sender && sender.hasOwnProperty('set') && sender.set('active', 0)
      window.confirm(MSG_CANVAS_CLEAR) && editor.runCommand(CMD_CORE_CANVAS_CLEAR)
    },
    stop(editor, sender) {}
  })
}

export default CanvasClear
