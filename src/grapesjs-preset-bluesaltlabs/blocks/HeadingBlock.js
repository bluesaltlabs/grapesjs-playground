// HTML Editor Constants
import {
  BLOCK_CATEGORY_SETTINGS_BASIC,
  BLOCK_HEADING,
  COMPONENT_HEADING,
} from '../constants'

// Helpers
import {
  getBlockLabelHtml,
} from '../helpers'

export function HeadingBlock(blockManager, config, editor) {
  blockManager.add(BLOCK_HEADING, {
    id: BLOCK_HEADING,
    category: BLOCK_CATEGORY_SETTINGS_BASIC,
    label: headingLabel,
    content: {
      type: COMPONENT_HEADING,
      tagName: 'h2',
      content: 'Heading',
      class: 'h1',
      'data-gjs-type': COMPONENT_HEADING,
    }
  })
}

const headingLabel = getBlockLabelHtml('Heading', `<i class="fas fa-heading"></i>`)
