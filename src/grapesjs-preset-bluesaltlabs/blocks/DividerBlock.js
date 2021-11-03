// HTML Editor Constants
import {
  BLOCK_CATEGORY_SETTINGS_LAYOUT,
  BLOCK_DIVIDER,
  COMPONENT_DIVIDER,
} from '../constants'

// Helpers
import {
  getBlockLabelHtml,
} from '../helpers'

export function DividerBlock(blockManager, config, editor) {
  blockManager.add(BLOCK_DIVIDER, {
    id: BLOCK_DIVIDER,
    category: BLOCK_CATEGORY_SETTINGS_LAYOUT,
    label: dividerLabel,
    content: {
      type: COMPONENT_DIVIDER,
      'data-gjs-type': COMPONENT_DIVIDER,
      content: '<hr />',
    }
  })
}

const dividerLabel = getBlockLabelHtml('Divider', `<i class="gjs-fonts gjs-f-divider"></i>`)
