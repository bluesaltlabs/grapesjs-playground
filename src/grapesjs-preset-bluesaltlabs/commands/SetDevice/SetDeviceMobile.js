// Local Constants
import {
  CMD_SET_DEVICE_MOBILE,
} from '../../constants'

export function SetDeviceMobile(commandManager, config, editor) {
  commandManager.add(CMD_SET_DEVICE_MOBILE, {
    run(editor, sender) {
      editor.setDevice('Mobile portrait')
    },
    stop(editor, sender) {}
  })
}

export default SetDeviceMobile
