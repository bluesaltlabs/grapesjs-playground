// Local Constants
import {
  CMD_STORE,
  ICON_CLASS_STORE_ERROR,
  EVENT_STORAGE_ERROR,
  PANEL_OPTIONS,
} from '../../constants'

export function StorageError(eventManager, config, editor) {
  editor.on(EVENT_STORAGE_ERROR, commandID => {
    const panels = editor.Panels
    const storeBtn = panels.getButton(PANEL_OPTIONS, CMD_STORE)
    storeBtn.set('className', ICON_CLASS_STORE_ERROR)
    storeBtn.set('disable', 0)
    storeBtn.set('active', 0)
  })
}

export default StorageError
