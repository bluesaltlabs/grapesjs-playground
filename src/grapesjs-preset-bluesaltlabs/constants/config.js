
// Helpers
import {
  getBlockLabelHtml,
} from '../helpers'

import { BLOCK_CATEGORY_COMPONENTS } from './'

const customCodeLabel = getBlockLabelHtml('Custom Code', `<i class="fas fa-code"></i>`)

// todo: make this a config option?
export const SHOW_LOADING_DEBUG_OUTPUT = true

//---------- Editor ----------------------------------------------------------//
export const EDITOR_CONTAINER_ID  = 'gjs'
export const DEFAULT_CONFIG       = {
  editHtmlImportLabel: '', // todo?
  editHtmlImportContent: '', //editor.getHtml(),
  editHtmlSaveBtn: 'Save',
  editHtmlSaveTitle: 'Edit HTML',
  baseCss: ``,
  logAllEvents: true, // todo: only if debug?? make impossible on production ?
  showStylesOnComponentSelect: false,
  showTraitsOnComponentSelect: true,
  richTextEditor: {
    actions: [],
  },
  pluginsOpts: {
    'grapesjs-preset-openeye': {
      optsComponentCodeEditor: {
        editJs: true, // Lets you edit component scripts allowScripts must be set to true.
        cleanCssBtn: false, // Used to remove css from the Selector Manager.
        codeViewOptions: {
          codeName: 'htmlmixed',
          theme: 'material',
          line: true,
          lineWrapping: true,
          lineNumbers: true,
          autoBeautify: true,
          autoCloseTags: true,
          autoCloseBrackets: true,
          styleActiveLine: true,
          smartIndent: true,
          indentWithTabs: false,
          extraKeys: {
            "Ctrl-Q": (cm) => { cm.foldCode(cm.getCursor()) },
            'Shift-Tab': 'indentLess',
            'Tab': 'indentMore',
          },
          foldGutter: true,
          gutters: ["CodeMirror-lint-markers", "CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        },
        // panelId:          "views-container",          // Id of panel to append code editor.
        // appendTo:         ".gjs-pn-views-container",  // Append code editor to an element not views-container (class or id).
        // openState:        { pn: '35%', cv: '65%' },   // Determine width of views panel (pn) and canvas (cv) in the open state.
        // closedState:      { pn: '15%', cv: '85%' },   //   Determine width of views panel (pn) and canvas (cv) in the closed state.
        // codeViewOptions:  {},                         // Code view/editor options.
        // preserveWidth:    false,                      // Stop resizing openState and closedState. Preserve views panel and canvas sizes.
        // clearData:        false,                      // Remove all gjs-data attributes from the component.
        // editJs:           false,                      // Lets you edit component scripts allowScripts must be set to true.
        // cleanCssBtn:      true,                       // Used to remove css from the Selector Manager.
        // htmlBtnText:      "Apply",                    // Save HTML button text.
        // cssBtnText:       "Apply",                    // Save CSS button text.
        // cleanCssBtnText:  "Delete",                   // Clean HTML button text.
      },
      optsParserPostCss: {},
      optsCustomCode: {
        blockCustomCode: {
          category: {
            id: BLOCK_CATEGORY_COMPONENTS,
            label: BLOCK_CATEGORY_COMPONENTS,
            open: false,
          },
          label: customCodeLabel,
        }
      },
    },
  }
}

