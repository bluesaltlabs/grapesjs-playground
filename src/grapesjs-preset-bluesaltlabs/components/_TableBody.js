/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/ComponentTableBody.js **/

// GrapesJS Mixins
//import { toLowerCase } from 'grapesjs/src/utils/mixins'

// Local Constants
import {
  COMPONENT_TABLE_BODY,
} from '../constants'

export function TableBody(domComponents, config, editor) {
  const tagName       = 'tbody'
  const tableBodyType = domComponents.getType(COMPONENT_TABLE_BODY)

  domComponents.addType(COMPONENT_TABLE_BODY, {
    model: Object.assign({}, tableBodyType?.model ?? {}, {
      defaults: Object.assign({}, tableBodyType?.model?.prototype?.defaults ?? {}, {
        tagName:        tagName,
        name:           'Table Body',
        'custom-name':  'Table Body',
        traits:         [
          // {}
        ].concat(tableBodyType?.model?.prototype?.defaults?.traits ?? {}),
        // draggable: ['table'],
        // droppable: ['tr'],
        // columns: 1,
        // rows: 1,
        //
      }),
    }, {
      // isComponent: el => toLowerCase(el.tagName) === tagName
    }),
    view: tableBodyType?.view ?? tableBodyType?.model?.prototype?.defaults?.view,
  })
}
