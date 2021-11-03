/** source: https://github.com/artf/grapesjs/issues/551 **/
// Local Constants
import {
  CMD_STORE,
  ICON_CLASS_STORE,
  EVENT_CHANGES_COUNT,
  PANEL_OPTIONS,
} from '../constants'

export function ChangesCount(eventManager, config, editor) {
  editor.on(EVENT_CHANGES_COUNT, commandID => {
      const editorModel   = editor.getModel()
      const changesCount  = editorModel.get('changesCount')

      if(changesCount) {
        const panels = editor.Panels
        const storeBtn = panels.getButton(PANEL_OPTIONS, CMD_STORE)

        if(storeBtn.get('className') === ICON_CLASS_STORE) {
          storeBtn.set('disable', 0)
        }
      }
  })
}

export default ChangesCount
