// HTML Editor Constants
import {
  BLOCK_CATEGORY_SETTINGS_BASIC,
  BLOCK_PARAGRAPH,
  COMPONENT_PARAGRAPH,
} from '../constants'

// Helpers
import {
  getBlockLabelHtml,
} from '../helpers'

export function ParagraphBlock(blockManager, config, editor) {
  blockManager.add(BLOCK_PARAGRAPH, {
    id: BLOCK_PARAGRAPH,
    category: BLOCK_CATEGORY_SETTINGS_BASIC,
    label: paragraphLabel,
    content: {
      type: COMPONENT_PARAGRAPH,
      content: 'New Paragraph',
    }
  })
}

const paragraphLabel = getBlockLabelHtml('Paragraph', `<i class="fas fa-paragraph"></i>`)
