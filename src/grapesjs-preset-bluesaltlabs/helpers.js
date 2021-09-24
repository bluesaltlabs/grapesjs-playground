import * as components from './components'
import * as blocks from './blocks'

export { loadPanels }  from './panels'
export { loadStyles } from './styles'
export { loadCommands } from './commands'
export { loadEvents } from './events'
export { loadTraits } from './traits'

export function loadComponents(editor, config) {
  const domComponents = editor.DomComponents;

  Object.values(components).forEach(initComponent => {
    initComponent(domComponents)
  })
}

export function loadBlocks(editor, config) {
  const blockManager = editor.BlockManager;

  Object.values(blocks).forEach(initBlock => {
    initBlock(blockManager)
  })
}

