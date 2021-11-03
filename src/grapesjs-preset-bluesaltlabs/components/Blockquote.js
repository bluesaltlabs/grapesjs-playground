/**  **/

// Local Constants
import {
  COMPONENT_DEFAULT,
  COMPONENT_BLOCKQUOTE,
} from '../constants'

export function Blockquote(domComponents, config, editor) {
  const tagName       = 'blockquote'

  const defaultType   = domComponents.getType(COMPONENT_DEFAULT)
  const defaultModel  = defaultType?.model
  const defaultView   = defaultType?.view ?? defaultType?.model?.prototype?.defaults?.view

  domComponents.addType(COMPONENT_BLOCKQUOTE, {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel?.prototype?.defaults ?? {}, {
        tagName:        tagName,
        name:           'Blockquote',
        'custom-name':  'Blockquote',
        // icon:           `<i class="gjs-fonts gjs-f-quo"></i>`, // todo
        classes:        ['blockquote'],
        traits: [
          // {}
        ].concat(defaultType?.model?.prototype?.defaults?.traits ?? {}),
      }),
    }, {
      isComponent(el) {
        if(
          [COMPONENT_BLOCKQUOTE, tagName].includes( `${el.tagName}`.toLowerCase() ) ||
          el?.classList?.contains('blockquote')
        ) {
          return { type: COMPONENT_BLOCKQUOTE }
        }
      }
    }),
    view: defaultView
  })
}
