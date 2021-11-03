// HTML Editor Constants
import {
  BLOCK_CATEGORY_SETTINGS_LAYOUT,
  BLOCK_FLEXBOX,
  COMPONENT_GRID_ROW,
  COMPONENT_GRID_COLUMN,
} from '../constants'

// Helpers
import {
  getBlockLabelHtml,
  attrsToString,
} from '../helpers'

export function FlexboxBlock(blockManager, config, editor) {
  const stylePrefix = editor.getConfig('stylePrefix')
  const clsRow = `${stylePrefix}row`
  const clsCol = `${stylePrefix}col`
  const labelRow = editor.getConfig('labelRow') ?? "row"
  const labelCol = editor.getConfig('labelCol') ?? "column"

  // Flex elements do not react on width style change therefore I use
  // 'flex-basis' as keyWidth for the resizer on columns
  const keyWidth = 'flex-basis'
  const step = 0.2
  const minDim = 1
  const currentUnit = 1
  const resizerBtm = { tl: 0, tc: 0, tr: 0, cl: 0, cr:0, bl:0, br: 0, minDim }
  const resizerRight = { ...resizerBtm, cr: 1, bc: 0, keyWidth, currentUnit, minDim, step }

  // todo: move this to a component?
  const rowAttr = {
    class: clsRow,
    'data-gjs-type': COMPONENT_GRID_ROW,
    'data-gjs-droppable': `.${clsCol}`,
    'data-gjs-resizable': resizerBtm,
    'data-gjs-custom-name': labelRow,
  }

  // todo: move this to a component?
  const colAttr = {
    class: clsCol,
    'data-gjs-type': COMPONENT_GRID_COLUMN,
    'data-gjs-draggable': `.${clsRow}`,
    'data-gjs-resizable': resizerRight,
    'data-gjs-custom-name': labelCol,
    // X Flex
    'data-gjs-unstylable': ['width'],
    'data-gjs-stylable-require': ['flex-basis'],
  }

  const attrsRow = attrsToString(rowAttr)
  const attrsCol = attrsToString(colAttr)
  const styleRow =
  `.${clsRow} {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    padding: 10px;
  }
  @media (max-width: 768px) {
    .${clsRow} {
      flex-wrap: wrap;
    }
  }`

  const styleClm =
  `.${clsCol} {
    min-height: 75px;
    flex-grow: 1;
    flex-basis: 100%;
  }`

  blockManager.add(BLOCK_FLEXBOX, {
    id: BLOCK_FLEXBOX,
    category: BLOCK_CATEGORY_SETTINGS_LAYOUT,
    label: flexboxLabel,
    content:
    `<div ${attrsRow}>
      <div ${attrsCol}></div>
      <div ${attrsCol}></div>
    </div>
    <style>
      ${styleRow}
      ${styleClm}
    </style>`
  })
}

const flexboxLabel = getBlockLabelHtml('Flexbox', `<i class="gjs-fonts gjs-f-b37"></i>`)

//const flexboxLabel = getBlockLabelHtml('Flexbox', `<i class="gjs-fonts gjs-f-b2"></i>`)
//const flexboxLabel = getBlockLabelHtml('Flexbox', `<i class="gjs-fonts gjs-f-b3"></i>`)
//const flexboxLabel = getBlockLabelHtml('Flexbox', `<i class="gjs-fonts gjs-f-3ba"></i>`)

