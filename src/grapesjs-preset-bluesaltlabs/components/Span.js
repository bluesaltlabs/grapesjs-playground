/**  **/

// Local Constants
import {
  COMPONENT_TEXT,
  COMPONENT_TEXT_NODE,
  COMPONENT_SPAN,
  TRAIT_CONTENT
} from '../constants'

export function Span(domComponents, config, editor) {
  const tagName   = 'span'

  const textType  = domComponents.getType(COMPONENT_TEXT)
  const textModel = textType?.model
  const textView  = textType?.view ?? textType?.model?.prototype?.defaults?.view

  domComponents.addType(COMPONENT_SPAN, {
    model: textModel.extend({
      defaults: Object.assign({}, textModel.prototype.defaults, {
        tagName:        tagName,
        name:           'Span',
        'custom-name':  'Span',
        editable:       true,
        // droppable:      true,
        content:        '',
        traits:         [
          //{ type: TRAIT_CONTENT },
        ].concat(textModel?.prototype?.defaults?.traits ?? {}),
        components: [
          {
            type: COMPONENT_TEXT_NODE,
            content: 'New Text',
          }
        ],
      }),
    }, {
      isComponent(el) {
        if(
          [COMPONENT_SPAN, tagName].includes( `${el.tagName}`.toLowerCase() )
        ) {
          return { type: COMPONENT_SPAN }
        }
      }
    }),
    view: textView,
  })
}
