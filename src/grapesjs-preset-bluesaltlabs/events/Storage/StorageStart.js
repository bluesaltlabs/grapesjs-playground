// Local Constants
import {
  CMD_STORE,
  ICON_CLASS_STORING,
  EVENT_STORAGE_START,
  PANEL_OPTIONS,
} from '../../constants'

export function StorageStart(eventManager, config, editor) {
  editor.on(EVENT_STORAGE_START, commandID => {
    const panels = editor.Panels
    const storeBtn = panels.getButton(PANEL_OPTIONS, CMD_STORE)
    storeBtn.set('className', ICON_CLASS_STORING)
    storeBtn.set('disable', 1)
    storeBtn.set('active', 0)
  })
}

export default StorageStart
