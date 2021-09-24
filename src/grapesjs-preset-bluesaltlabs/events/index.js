// Local Constants
// import {
//   CMD_STORE,
//   PANEL_OPTIONS,
//   //EVENT_RUN,
//   EVENT_STORAGE_START,
//   EVENT_STORAGE_END,
//   EVENT_STORAGE_ERROR,
//   CMD_HTML_CODE_EDITOR,
//   EVENT_HTML_CODE_EDITOR_CLOSE,
//   EVENT_HTML_CODE_EDITOR_SAVE,
//   EVENT_CHANGES_COUNT,
//   EVENT_ASSET_UPLOAD_START,
//   EVENT_ASSET_UPLOAD_END,
//   EVENT_ASSET_UPLOAD_ERROR,
//   EVENT_ASSET_UPLOAD_RESPONSE,
// } from '../constants'

// Icon Constants
const ICON_CLASS_SAVE   = 'fas fa-save'
const ICON_CLASS_SYNC   = 'fas fa-sync'
const ICON_CLASS_ERROR  = 'fas fa-exclamation-triangle'

const onHtmlCodeEditorCloseModal = (editor) => {
  const panels = editor.Panels
  //const htmlCodeEditorBtn = panels.getButton(PANEL_OPTIONS, CMD_HTML_CODE_EDITOR)
  //htmlCodeEditorBtn.set('active', 0)
}

// todo:
export function loadEvents(editor, config) {

  // debug: fire on all events
  //editor.on(EVENT_RUN, commandId => {
  //  console.debug('Run:', commandId);
  //})

  // editor.on(EVENT_STORAGE_START, commandID => {
  //   const panels = editor.Panels
  //   const storeBtn = panels.getButton(PANEL_OPTIONS, CMD_STORE)
  //   storeBtn.set('className', ICON_CLASS_SYNC)
  //   storeBtn.set('disable', 1)
  //   storeBtn.set('active', 0)
  // })

  // editor.on(EVENT_STORAGE_END, commandID => {
  //   const panels = editor.Panels
  //   const storeBtn = panels.getButton(PANEL_OPTIONS, CMD_STORE)
  //   storeBtn.set('className', ICON_CLASS_SAVE)
  //   storeBtn.set('disable', 1)
  //   storeBtn.set('active', 0)
  // })

  // editor.on(EVENT_STORAGE_ERROR, commandID => {
  //   const panels = editor.Panels
  //   const storeBtn = panels.getButton(PANEL_OPTIONS, CMD_STORE)
  //   storeBtn.set('className', ICON_CLASS_ERROR)
  //   storeBtn.set('disable', 0)
  //   storeBtn.set('active', 0)
  // })

  // editor.on(EVENT_HTML_CODE_EDITOR_CLOSE, commandID => onHtmlCodeEditorCloseModal(editor))
  // editor.on(EVENT_HTML_CODE_EDITOR_SAVE, commandID => onHtmlCodeEditorCloseModal(editor))

  // source: https://github.com/artf/grapesjs/issues/551
  // editor.on(EVENT_CHANGES_COUNT, commandID => {
  //   const editorModel   = editor.getModel()
  //   const changesCount  = editorModel.get('changesCount')
  //
  //   if(changesCount) {
  //     const panels = editor.Panels
  //     const storeBtn = panels.getButton(PANEL_OPTIONS, CMD_STORE)
  //
  //     if(storeBtn.get('className') === ICON_CLASS_SAVE) {
  //       storeBtn.set('disable', 0)
  //     }
  //   }
  // })

  /*
  // The upload is started
  editor.on(EVENT_ASSET_UPLOAD_START, () => {
    //
  });

  // The upload is ended (completed or not)
  editor.on(EVENT_ASSET_UPLOAD_END, () => {
    //
  })

  // Error handling
  editor.on(EVENT_ASSET_UPLOAD_ERROR, (err) => {
    //
  })

  // Do something on response
  editor.on(EVENT_ASSET_UPLOAD_RESPONSE, (response) => {
    //
  })

  */
}
