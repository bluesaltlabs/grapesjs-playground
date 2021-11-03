// Local Constants
import {
  CMD_STORE,
  ICON_CLASS_STORE,
  EVENT_STORAGE_END,
  PANEL_OPTIONS,
} from '../../constants'

export function StorageEnd(eventManager, config, editor) {
  editor.on(EVENT_STORAGE_END, commandID => {
    const panels = editor.Panels
    const storeBtn = panels.getButton(PANEL_OPTIONS, CMD_STORE)
    storeBtn.set('className', ICON_CLASS_STORE)
    storeBtn.set('disable', 1)
    storeBtn.set('active', 0)
  })
}

export default StorageEnd
