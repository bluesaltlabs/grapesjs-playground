// Local Constants
import {
  CMD_CHANGE_OPEN,
  EVENT_HTML_CODE_EDITOR_OPEN,
  EVENT_HTML_CODE_EDITOR_CLOSE,
  EVENT_HTML_CODE_EDITOR_SAVE,
} from '../constants'

export function openHtmlCodeEditor(editor, config) {
  const codeManager   = editor.CodeManager
  const modal         = editor.Modal;
  const prefix        = editor.getConfig('stylePrefix');
  const codeViewer    = codeManager.getViewer('CodeMirror').clone();
  let viewerEditor    = codeViewer.editor;
  const importLabel   = config.editHtmlImportLabel;
  const importContent = config.editHtmlImportContent;

  // Init editor container
  const container     = document.createElement('div');

  // Init save button
  const btnSave     = document.createElement('button')
  btnSave.type      = 'button';
  btnSave.innerHTML = config.editHtmlSaveBtn;
  btnSave.className = `${prefix}btn-prim ${prefix}btn-import`
  btnSave.onclick   = (event) => {
    editor.setComponents(viewerEditor.getValue().trim())
    modal.close()
    editor.trigger(EVENT_HTML_CODE_EDITOR_SAVE)
  }

  // Init code viewer
  codeViewer.set({ ...{
      codeName: 'htmlmixed',
      theme: 'hopscotch',
      readOnly: 0
    }, ...config.importViewerOptions});

  return {
    run(editor, sender) {
      editor.trigger(EVENT_HTML_CODE_EDITOR_OPEN)

      if (!viewerEditor) {
        const textarea = document.createElement('textarea')

        if(importLabel) {
          const labelEl     = document.createElement('div')
          labelEl.className = `${prefix}import-label`
          labelEl.innerHTML = importLabel
          container.appendChild(labelEl)
        }

        container.appendChild(textarea)
        container.appendChild(btnSave)
        codeViewer.init(textarea)
        viewerEditor = codeViewer.editor
      }

      modal.setTitle(config.editHtmlSaveTitle)
      modal.setContent(container)
      const content = typeof importContent === 'function' ? importContent(editor) : importContent ? importContent : editor.getHtml()
      codeViewer.setContent(content || '')
      modal.open().getModel().once( CMD_CHANGE_OPEN, () => editor.stopCommand(this.id) )
      viewerEditor.refresh()
    },
    stop(editor, sender) {
      editor.trigger(EVENT_HTML_CODE_EDITOR_CLOSE);
      modal.close()
    }
  }
}
