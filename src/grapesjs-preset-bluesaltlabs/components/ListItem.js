/**  **/

// Local Constants
import {
  COMPONENT_TEXT,
  COMPONENT_TEXT_NODE,
  COMPONENT_LIST,
  COMPONENT_LIST_ITEM,
} from '../constants'

// todo: add new list append to this one if list item is indented?
// todo: delete parent list and append to parent if list item is un-indented?
export function ListItem(domComponents, config, editor) {
  const tagName       = 'li'

  const textType  = domComponents.getType(COMPONENT_TEXT)
  const textModel = textType?.model
  const textView  = textType?.view ?? textType?.model?.prototype?.defaults?.view

  domComponents.addType(COMPONENT_LIST_ITEM, {
    model: textModel.extend({
      defaults: Object.assign({}, textModel.prototype.defaults, {
        tagName:        tagName,
        name:           'List Item',
        'custom-name':  'List Item',
        editable:       true,
        content:        '',
        draggable:      `[data-gjs-type="${COMPONENT_LIST}"]`,
        droppable:      true,
        //icon:           `<i class="fas fa-list"></i>`, // todo?
        traits: [
          'id',
          // {}
        ].concat(textType?.model?.prototype?.defaults?.traits ?? {}),
        components: [
          {
            type: COMPONENT_TEXT_NODE,
            content: 'New List Item',
          }
        ],
      }),
    }, {
      isComponent(el) {
        if(
          [COMPONENT_LIST_ITEM, tagName].includes( `${el?.tagName}`.toLowerCase() )
        ) {
          return { type: COMPONENT_LIST_ITEM }
        }
      }
    }),
    view: textView
  })
}
