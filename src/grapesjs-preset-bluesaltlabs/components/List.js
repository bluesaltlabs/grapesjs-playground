/**  **/

// Local Constants
import {
  COMPONENT_DEFAULT,
  COMPONENT_LIST,
  COMPONENT_LIST_ITEM,
} from '../constants'

// todo: convert to ordered or unordered list
//       see heading component/block
// todo: delete lists if the last list item is created?
export function List(domComponents, config, editor) {
  const tagName = 'ul' // 'ol'

  const defaultType   = domComponents.getType(COMPONENT_DEFAULT)
  const defaultModel  = defaultType?.model
  const defaultView   = defaultType?.view ?? defaultType?.model?.prototype?.defaults?.view

  domComponents.addType(COMPONENT_LIST, {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel?.prototype?.defaults ?? {}, {
        tagName:        tagName,
        name:           'List',
        'custom-name':  'List',
        icon:           `<i class="fas fa-list"></i>`, // todo
        //classes:        [''], // todo
        traits: [
          // {}
          // todo: ordered vs unordered
          // todo: style (like, bullet style)
        ].concat(defaultType?.model?.prototype?.defaults?.traits ?? {}),
      }),
    }, {
      isComponent(el) {
        if(
          [COMPONENT_LIST, tagName, 'ol'].includes( `${el.tagName}`.toLowerCase() )
        ) {
          return { type: COMPONENT_LIST }
        }
      }
    }),
    view: defaultView
  })
}
