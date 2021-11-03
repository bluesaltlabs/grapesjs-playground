// HTML Editor Constants
import {
  BLOCK_CATEGORY_SETTINGS_LAYOUT,
  BLOCK_GRID_CONTAINER,
} from '../constants'

// Helpers
import {
  getBlockLabelHtml,
} from '../helpers'

export function GridContainerBlock(blockManager, config, editor) {
  blockManager.add(BLOCK_GRID_CONTAINER, {
    id: BLOCK_GRID_CONTAINER,
    category: BLOCK_CATEGORY_SETTINGS_LAYOUT,
    label: gridContainerLabel,
    content:
      `<grid_container class="container">
         <p>A new Container</p>
      </grid_container>`
  })
}

const gridContainerLabel = getBlockLabelHtml('Grid Container', `<i class="gjs-fonts gjs-f-b1"></i>`)
