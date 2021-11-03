// HTML Editor Constants
import {
  BLOCK_CATEGORY_SETTINGS_LAYOUT,
  BLOCK_GRID_ROW,
  COMPONENT_GRID_ROW,
  COMPONENT_GRID_COLUMN,
} from '../constants'

// Helpers
import {
  getBlockLabelHtml,
} from '../helpers'

export function GridRowBlock(blockManager, config, editor) {
  blockManager.add(BLOCK_GRID_ROW, {
    id: BLOCK_GRID_ROW,
    category: BLOCK_CATEGORY_SETTINGS_LAYOUT,
    label: gridRowLabel,
    content:
      `<grid_row data-gjs-type="${COMPONENT_GRID_ROW}" class="row">
         <grid_column data-gjs-type="${COMPONENT_GRID_COLUMN}" class="col">
            <p>New Grid Row</p>
         </grid_column>
      </grid_row>`
  })
}

const gridRowLabel = getBlockLabelHtml('Grid Row', `<i class="gjs-fonts gjs-f-b1"></i>`)
