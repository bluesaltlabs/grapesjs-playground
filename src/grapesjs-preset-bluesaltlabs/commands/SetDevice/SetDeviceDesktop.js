// Local Constants
import {
  CMD_SET_DEVICE_DESKTOP,
} from '../../constants'

export function SetDeviceDesktop(commandManager, config, editor) {
  commandManager.add(CMD_SET_DEVICE_DESKTOP, {
    run(editor, sender) {
      editor.setDevice('Desktop')
    },
    stop(editor, sender) {}
  })
}

export default SetDeviceDesktop
