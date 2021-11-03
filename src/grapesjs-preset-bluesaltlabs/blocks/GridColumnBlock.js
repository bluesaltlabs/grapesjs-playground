// HTML Editor Constants
import {
  BLOCK_CATEGORY_SETTINGS_LAYOUT,
  COMPONENT_GRID_ROW,
  COMPONENT_GRID_COLUMN,
  COMPONENT_GRID_CONTAINER,
  BLOCK_GRID_ROW,
  BLOCK_GRID_COLUMN,
  BLOCK_GRID_CONTAINER,
} from '../constants'

// Helpers
import {
  getBlockLabelHtml,
} from '../helpers'

export function GridColumnBlock(blockManager, config, editor) {
  blockManager.add(BLOCK_GRID_COLUMN, {
    id: BLOCK_GRID_COLUMN,
    category: BLOCK_CATEGORY_SETTINGS_LAYOUT,
    label: gridColumnLabel,
    content:
      `<grid_column data-gjs-type="${COMPONENT_GRID_COLUMN}" class="col">
         <p>New Grid Column</p>
      </grid_column>`
  })
}

const gridColumnLabel = getBlockLabelHtml('Grid Column', `<i class="gjs-fonts gjs-f-b1"></i>`)
