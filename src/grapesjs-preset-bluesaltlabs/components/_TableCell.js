/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/ComponentTableCell.js **/

// GrapesJS Mixins
//import { toLowerCase } from 'grapesjs/src/utils/mixins'

// Local Constants
import {
  COMPONENT_TABLE_ROW,
  COMPONENT_TABLE_CELL,
} from '../constants'

export function TableCell(domComponents, config, editor) {
  //const tagName     = 'tr' || 'td' // todo?
  const tagName       = 'td'
  const tableCellType = domComponents.getType(COMPONENT_TABLE_CELL)

  domComponents.addType(COMPONENT_TABLE_CELL, {
    model: Object.assign({}, tableCellType?.model ?? {}, {
      defaults: Object.assign({}, tableCellType?.model?.prototype?.defaults ?? {}, {
        tagName: tagName,
        name:           'Table Cell',
        'custom-name':  'Table Cell',
        draggable: [COMPONENT_TABLE_ROW],
        traits: [
          // {}
          // todo: convert to td / th?
        ].concat(tableCellType?.model?.prototype?.defaults?.traits ?? {}),
        //
      }),
    }, {
      // isComponent: el => [tagName', 'th'].indexOf(toLowerCase(el.tagName)) >= 0
    }),
    view: tableCellType?.view ?? tableCellType?.model?.prototype?.defaults?.view,
  })
}
