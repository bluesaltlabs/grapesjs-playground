/**  **/

// Local Constants
import {
  COMPONENT_TEXT,
  COMPONENT_PARAGRAPH,
  COMPONENT_BLOCKQUOTE,
  COMPONENT_BLOCKQUOTE_BODY,
} from '../constants'

export function BlockquoteBody(domComponents, config, editor) {
  const tagName   = 'div'

  const textType  = domComponents.getType(COMPONENT_TEXT)
  const textModel = textType.model
  const textView  = textType?.view ?? textType?.model?.prototype?.defaults?.view

  domComponents.addType(COMPONENT_BLOCKQUOTE_BODY, {
    model: textModel.extend({
      defaults: Object.assign({}, textModel.prototype.defaults, {
        tagName:        tagName,
        name:           'Blockquote Body',
        'custom-name':  'Blockquote Body',
        draggable:      `[data-gjs-type="${COMPONENT_BLOCKQUOTE}"]`,
        // droppable:      true,
        classes:        ['blockquote-body'],
        editable:       true,
        content:        '',
        traits: [
          // {}
        ].concat(textType?.model?.prototype?.defaults?.traits ?? {}),
        components: [
          {
            type: COMPONENT_PARAGRAPH,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida magna at purus interdum, et viverra mi efficitur.',
          },
        ],
      }),
    }, {
      isComponent(el) {
        if(
          [COMPONENT_BLOCKQUOTE_BODY].includes( `${el.tagName}`.toLowerCase() ) ||
          el?.classList?.contains('blockquote-body')
        ) {
          return { type: COMPONENT_BLOCKQUOTE_BODY }
        }
      }
    }),
    view: textView,
  })
}
