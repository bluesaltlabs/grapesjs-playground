// HTML Editor Constants
import {
  BLOCK_CATEGORY_SETTINGS_COMPONENTS,
  BLOCK_LIST,
  COMPONENT_LIST,
  COMPONENT_LIST_ITEM,
} from '../constants'

// Helpers
import {
  getBlockLabelHtml,
} from '../helpers'

export function ListBlock(blockManager, config, editor) {
  blockManager.add(BLOCK_LIST, {
    id: BLOCK_LIST,
    category: BLOCK_CATEGORY_SETTINGS_COMPONENTS,
    label: listLabel,
    content: {
      type: COMPONENT_LIST,
      components: [
        {
          type: COMPONENT_LIST_ITEM,
          content: 'List Item 1',
        },
        {
          type: COMPONENT_LIST_ITEM,
          content: 'List Item 2',
        },
        {
          type: COMPONENT_LIST_ITEM,
          content: 'List Item 3',
        }
      ],
    }
    // content:
    //   `<ul data-gjs-type="${COMPONENT_LIST}">
    //     <li data-gjs-type="${COMPONENT_LIST_ITEM}">List Item 1</li>
    //     <li data-gjs-type="${COMPONENT_LIST_ITEM}">List Item 2</li>
    //     <li data-gjs-type="${COMPONENT_LIST_ITEM}">List Item 3</li>
    //   </ul>`
  })
}

const listLabel = getBlockLabelHtml('List', `<i class="fas fa-list"></i>`)
