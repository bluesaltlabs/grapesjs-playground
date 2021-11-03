/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/ComponentTextNode.js **/

// Local Constants
import {
  COMPONENT_TEXT_NODE,
} from '../constants'

export function TextNode(domComponents, config, editor) {
  const textNodeType = domComponents.getType(COMPONENT_TEXT_NODE)

  domComponents.addType(COMPONENT_TEXT_NODE, {
    model: Object.assign({}, textNodeType?.model ?? {}, {
      defaults: Object.assign({}, textNodeType?.model?.prototype?.defaults ?? {}, {
        tagName:        '',
        name:           'Text Node',
        'custom-name':  'Text Node',
        editable:       true,
        content:        '',
        // type: 'textnode',
        // draggable: false,
        // droppable: false,
        // layerable: false,
        // selectable: false,
        // removable: false,
        // highlightable: 0,
        // copyable: false,
        // _innertext: false,
      }),
    }, {
      /*
      isComponent(el) {
        let result = ''
        if (el.nodeType === Node.TEXT_NODE) {
          result = {
            type:     'textnode',
            content:  el?.textContent ?? ''
          }
        }
        return result
      }
      */
    }),
    view: textNodeType?.view ?? textNodeType?.model?.prototype?.defaults?.view,
  })
}
