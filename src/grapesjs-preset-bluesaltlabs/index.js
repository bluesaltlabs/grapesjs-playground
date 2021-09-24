import grapesjs from 'grapesjs'
import pluginComponentCodeEditor from 'grapesjs-component-code-editor'
import pluginCustomCode from 'grapesjs-custom-code'
import parserPostCSS from 'grapesjs-parser-postcss'

// Local Helpers
import {
  loadTraits,
  loadComponents,
  loadBlocks,
  loadCommands,
  loadEvents,
  loadPanels,
  loadStyles,
} from './helpers'

// Local Constants
import {
  DEFAULT_CONFIG,
} from './constants'

export default grapesjs.plugins.add('grapesjs-preset-bluesaltlabs', (editor, opts = {}) => {
  const config = { ...DEFAULT_CONFIG, ...opts }
  const { optsParserPostCss, optsCustomCode, optsComponentCodeEditor } = config

  // Load external plugins
  parserPostCSS && parserPostCSS(editor, optsParserPostCss)
  pluginCustomCode && pluginCustomCode(editor, optsCustomCode)
  pluginComponentCodeEditor && pluginComponentCodeEditor(editor, optsComponentCodeEditor)

  // Load plugin modules
  loadTraits(     editor, config)
  loadComponents( editor, config)
  loadBlocks(     editor, config)
  loadCommands(   editor, config)
  loadEvents(     editor, config)
  loadPanels(     editor, config)
  loadStyles(     editor, config)
})
