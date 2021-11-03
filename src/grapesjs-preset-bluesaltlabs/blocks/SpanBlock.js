// HTML Editor Constants
import {
  BLOCK_CATEGORY_SETTINGS_BASIC,
  BLOCK_SPAN,
  COMPONENT_SPAN,
} from '../constants'

// Helpers
import {
  getBlockLabelHtml,
} from '../helpers'

export function SpanBlock(blockManager, config, editor) {
  blockManager.add(BLOCK_SPAN, {
    id: BLOCK_SPAN,
    category: BLOCK_CATEGORY_SETTINGS_BASIC,
    label: spanLabel,
    content: {
      type: COMPONENT_SPAN,
      'data-gjs-type': COMPONENT_SPAN,
      content: 'New Span',
    }
  })
}

const spanLabel = getBlockLabelHtml('Span', `<i class="gjs-fonts gjs-f-text"></i>`)
