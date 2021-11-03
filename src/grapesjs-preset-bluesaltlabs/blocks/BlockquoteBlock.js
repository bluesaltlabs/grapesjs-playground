// Local Constants
import {
  BLOCK_CATEGORY_SETTINGS_COMPONENTS,
  BLOCK_BLOCKQUOTE,
  COMPONENT_BLOCKQUOTE_BODY,
  COMPONENT_SPAN,
  COMPONENT_BLOCKQUOTE_FOOTER,
} from '../constants'

// Local Helpers
import {
  getBlockLabelHtml,
} from '../helpers'

export function BlockquoteBlock(blockManager, config, editor) {
  blockManager.add(BLOCK_BLOCKQUOTE, {
    id: BLOCK_BLOCKQUOTE,
    category: BLOCK_CATEGORY_SETTINGS_COMPONENTS,
    label: blockquoteLabel,
    components: [
      {
        type: COMPONENT_BLOCKQUOTE_BODY,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida magna at purus interdum, et viverra mi efficitur.`,
      },
      {
        type: COMPONENT_BLOCKQUOTE_FOOTER,
        components: [
          {
            type: COMPONENT_SPAN,
            content: `Someone famous in <cite title="Source">Source Title</cite>`,
          },
        ],
      },
    ],
  })
}

// todo: put these as constants somewhere.
const blockquoteLabel = getBlockLabelHtml('Blockquote', `<i class="gjs-fonts gjs-f-quo"></i>`)
