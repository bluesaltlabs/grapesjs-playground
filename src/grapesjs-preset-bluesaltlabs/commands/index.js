// Commands
import {
  openHtmlCodeEditor,
} from './openHtmlCodeEditor'

// Local Constants
import {
  CMD_HTML_CODE_EDITOR,
  //CMD_STORE,
  CMD_SET_DEVICE_DESKTOP,
  CMD_SET_DEVICE_TABLET,
  CMD_SET_DEVICE_MOBILE,
  CMD_CANVAS_CLEAR,
  CMD_CORE_CANVAS_CLEAR,
  MSG_CANVAS_CLEAR,
} from '../constants'

// todo: do something here.
export function loadCommands(editor, config) {

  const commands = editor.Commands;

  commands.add(CMD_HTML_CODE_EDITOR, openHtmlCodeEditor(editor, config))
  //
  // commands.add(CMD_STORE, {
  //   run(editor, sender) {
  //     sender && sender.hasOwnProperty('set') && sender.set('active', 0)
  //     editor.store()
  //   },
  //   stop(editor, sender) {}
  // })
  //
  commands.add(CMD_SET_DEVICE_DESKTOP, {
    run(editor, sender) {
      editor.setDevice('Desktop')
    },
    stop(editor, sender) {}
  })

  commands.add(CMD_SET_DEVICE_TABLET, {
    run(editor, sender) {
      editor.setDevice('Tablet')
    },
    stop(editor, sender) {}
  })

  commands.add(CMD_SET_DEVICE_MOBILE, {
    run(editor, sender) {
      editor.setDevice('Mobile portrait')
    },
    stop(editor, sender) {}
  })

  commands.add(CMD_CANVAS_CLEAR, {
    run(editor, sender) {
      sender && sender.hasOwnProperty('set') && sender.set('active', 0)
      window.confirm(MSG_CANVAS_CLEAR) && editor.runCommand(CMD_CORE_CANVAS_CLEAR)
    },
    stop(editor, sender) {}
  })
}
