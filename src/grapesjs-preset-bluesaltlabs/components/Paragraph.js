/**  **/

// Local Constants
import {
  COMPONENT_TEXT,
  COMPONENT_TEXT_NODE,
  COMPONENT_PARAGRAPH,
  TRAIT_CLASS_SELECT,
} from '../constants'

export function Paragraph(domComponents, config, editor) {
  const tagName = 'p'

  const textType  = domComponents.getType(COMPONENT_TEXT)
  const textModel = textType?.model
  const textView  = textType?.view ?? textType?.model?.prototype?.defaults?.view

  domComponents.addType(COMPONENT_PARAGRAPH, {
    model: textModel.extend({
      defaults: Object.assign({}, textModel.prototype.defaults, {
        tagName:        tagName,
        name:           'Paragraph',
        'custom-name':  'Paragraph',
        editable:       true,
        content:        '',
        traits:         [
          {
            type: TRAIT_CLASS_SELECT,
            options: [
              { value: '',                  name: 'Normal' },
              { value: 'lead',              name: 'Lead' },
              { value: 'small text-muted',  name: 'Small' },
            ],
            label: 'Variant',
          }
        ].concat(textModel?.prototype?.defaults?.traits ?? {}),
        components: [
          {
            type: COMPONENT_TEXT_NODE,
            content: 'New Paragraph',
          }
        ],
      }),
    }, {
      isComponent(el) {
        if(
          [COMPONENT_PARAGRAPH, tagName].includes( `${el?.tagName}`.toLowerCase() )
        ) {
          return { type: COMPONENT_PARAGRAPH }
        }
      }
    }),
    view: textView,
  })
}
