/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/ComponentTableRow.js **/

// GrapesJS Mixins
//import { toLowerCase } from 'grapesjs/src/utils/mixins'

// Local Constants
import {
  COMPONENT_TABLE_ROW,
  COMPONENT_TABLE_HEAD,
  COMPONENT_TABLE_BODY,
  COMPONENT_TABLE_FOOT,
} from '../constants'

export function TableRow(domComponents, config, editor) {
  const tagName       = 'tr'
  const tableRowType  = domComponents.getType(COMPONENT_TABLE_ROW)

  domComponents.addType(COMPONENT_TABLE_ROW, {
    model: Object.assign({}, tableRowType?.model ?? {}, {
      defaults: Object.assign({}, tableRowType?.model?.prototype?.defaults ?? {}, {
        tagName: tagName,
        name:           'Table Row',
        'custom-name':  'Table Row',
        draggable: [COMPONENT_TABLE_HEAD, COMPONENT_TABLE_BODY, COMPONENT_TABLE_FOOT],
        droppable: ['th', 'td'],
        traits: [
          // {}
        ].concat(tableRowType?.model?.prototype?.defaults?.traits ?? {}),
        //
      }),
    }, {
      // isComponent: el => toLowerCase(el.tagName) === tagName
    }),
    view: tableRowType?.view ?? tableRowType?.model?.prototype?.defaults?.view,
  })
}
