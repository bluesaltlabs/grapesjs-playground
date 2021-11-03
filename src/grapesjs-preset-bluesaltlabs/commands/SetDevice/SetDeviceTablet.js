// Local Constants
import {
  CMD_SET_DEVICE_TABLET,
} from '../../constants'

export function SetDeviceTablet(commandManager, config, editor) {
  commandManager.add(CMD_SET_DEVICE_TABLET, {
    run(editor, sender) {
      editor.setDevice('Tablet')
    },
    stop(editor, sender) {}
  })
}

export default SetDeviceTablet
