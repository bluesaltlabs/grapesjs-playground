export * from './Storage'
export * from './ChangesCount'
export * from './Run'
export * from './Stop'


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
//   ICON_CLASS_STORING,
//   ICON_CLASS_STORE_SUCCESS,
//   ICON_CLASS_STORE_ERROR,
// } from '../constants'

//const onHtmlCodeEditorCloseModal = (editor) => {
//  const panels = editor.Panels
  //const htmlCodeEditorBtn = panels.getButton(PANEL_OPTIONS, CMD_HTML_CODE_EDITOR)
  //htmlCodeEditorBtn.set('active', 0)
//}

// todo: load these like blocks and components instead
//export function loadEvents(editor, config) {

  // debug: fire on all events
  // todo: set config option in editor settings to enable/disable this event
  //editor.on(EVENT_RUN, commandId => {
  //  console.debug('Run:', commandId);
  //})

  // editor.on(EVENT_STORAGE_START, commandID => {
  //   const panels = editor.Panels
  //   const storeBtn = panels.getButton(PANEL_OPTIONS, CMD_STORE)
  //   storeBtn.set('className', ICON_CLASS_STORING)
  //   storeBtn.set('disable', 1)
  //   storeBtn.set('active', 0)
  // })

  // editor.on(EVENT_STORAGE_END, commandID => {
  //   const panels = editor.Panels
  //   const storeBtn = panels.getButton(PANEL_OPTIONS, CMD_STORE)
  //   storeBtn.set('className', ICON_CLASS_STORE_SUCCESS)
  //   storeBtn.set('disable', 1)
  //   storeBtn.set('active', 0)
  // })

  // editor.on(EVENT_STORAGE_ERROR, commandID => {
  //   const panels = editor.Panels
  //   const storeBtn = panels.getButton(PANEL_OPTIONS, CMD_STORE)
  //   storeBtn.set('className', ICON_CLASS_STORE_ERROR)
  //   storeBtn.set('disable', 0)
  //   storeBtn.set('active', 0)
  // })



  // source: https://github.com/artf/grapesjs/issues/551
  // editor.on(EVENT_CHANGES_COUNT, commandID => {
  //   const editorModel   = editor.getModel()
  //   const changesCount  = editorModel.get('changesCount')
  //
  //   if(changesCount) {
  //     const panels = editor.Panels
  //     const storeBtn = panels.getButton(PANEL_OPTIONS, CMD_STORE)
  //
  //     if(storeBtn.get('className') === ICON_CLASS_STORE) {
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
//}
