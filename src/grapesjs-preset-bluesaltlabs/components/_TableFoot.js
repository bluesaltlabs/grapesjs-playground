/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/ComponentTableFoot.js **/

// Local Constants
import {
  COMPONENT_TABLE_FOOT,
} from '../constants'

export function TableFoot(domComponents, config, editor) {
  const tagName       = 'tfoot'
  const tableFootType = domComponents.getType(COMPONENT_TABLE_FOOT)

  domComponents.addType(COMPONENT_TABLE_FOOT, {
    model: Object.assign({}, tableFootType?.model ?? {}, {
      defaults: Object.assign({}, tableFootType?.model?.prototype?.defaults ?? {}, {
        tagName:        tagName,
        name:           'Table Foot',
        'custom-name':  'Table Foot',
        traits: [
          // {}
        ].concat(tableFootType?.model?.prototype?.defaults?.traits ?? {}),
        //
      }),
    }, {
      // isComponent: el => toLowerCase(el.tagName) === tagName
    }),
    view: tableFootType?.view ?? tableFootType?.model?.prototype?.defaults?.view,
  })
}
