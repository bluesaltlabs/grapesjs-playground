/**  **/

// Local Constants
import {
  COMPONENT_TEXT,
  COMPONENT_BLOCKQUOTE,
  COMPONENT_BLOCKQUOTE_FOOTER,
  COMPONENT_SPAN,
} from '../constants'

export function BlockquoteFooter(domComponents, config, editor) {
  const tagName   = 'footer'

  const textType  = domComponents.getType(COMPONENT_TEXT)
  const textModel = textType.model
  const textView  = textType?.view ?? textType?.model?.prototype?.defaults?.view

  domComponents.addType(COMPONENT_BLOCKQUOTE_FOOTER, {
    model: textModel.extend({
      defaults: Object.assign({}, textModel.prototype.defaults, {
        tagName:        tagName,
        name:           'Blockquote Footer',
        'custom-name':  'Blockquote Footer',
        draggable:      `[data-gjs-type="${COMPONENT_BLOCKQUOTE}"]`,
        classes:        ['blockquote-footer'],
        editable:       true,
        content:        '',
        traits: [
          // {}
        ].concat(textType?.model?.prototype?.defaults?.traits ?? {}),
        components: [
          {
            type: COMPONENT_SPAN,
            content: `Someone famous in <cite title="Source">Source Title</cite>`,
          },
        ],
      }),
    }, {
      isComponent(el) {
        if(
          [COMPONENT_BLOCKQUOTE_FOOTER].includes( `${el.tagName}`.toLowerCase() ) ||
          el?.classList?.contains('blockquote-footer')
        ) {
          return { type: COMPONENT_BLOCKQUOTE_FOOTER }
        }
      }
    }),
    view: textView,
  })
}
