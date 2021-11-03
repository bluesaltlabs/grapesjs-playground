import grapesjs from 'grapesjs'
import pluginComponentCodeEditor from 'grapesjs-component-code-editor'
import parserPostCSS from 'grapesjs-parser-postcss'

// CodeMirror plugins
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/xml-fold'
import 'codemirror/addon/fold/indent-fold'
import 'codemirror/addon/fold/markdown-fold'
import 'codemirror/addon/fold/comment-fold'

// Local Helpers
import {
  loadActions,
  loadTraits,
  loadComponents,
  loadBlocks,
  loadCommands,
  loadEvents,
  loadPanels,
  loadStyles,
  loadKeymaps,
} from './helpers'

// Local Constants
import {
  DEFAULT_CONFIG,
} from './constants'

const jsonlint  = require("jsonlint-mod")
window.jsonlint = jsonlint

export default grapesjs.plugins.add('grapesjs-preset-openeye', (editor, options = {}) => {
  const config = { ...DEFAULT_CONFIG, ...options }

  //console.debug("grapesjs-preset-openeye plugin received this config:", { config: config })

  const { optsParserPostCss, optsComponentCodeEditor } = config

  // Load external plugins
  parserPostCSS && parserPostCSS(editor, optsParserPostCss)
  pluginComponentCodeEditor && pluginComponentCodeEditor(editor, optsComponentCodeEditor)

  // Load plugin modules
  loadActions(    editor, config)
  loadTraits(     editor, config)
  loadComponents( editor, config)
  loadBlocks(     editor, config)
  loadCommands(   editor, config)
  loadEvents(     editor, config)
  loadKeymaps(    editor, config)
  loadPanels(     editor, config)
  loadStyles(     editor, config)
})
