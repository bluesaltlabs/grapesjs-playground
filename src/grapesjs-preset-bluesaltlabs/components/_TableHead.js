/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/ComponentTableHead.js **/

// GrapesJS Mixins
//import { toLowerCase } from 'grapesjs/src/utils/mixins'

// Local Constants
import {
  COMPONENT_TABLE_HEAD,
} from '../constants'

export function TableHead(domComponents, config, editor) {
  const tagName       = 'thead'
  const tableHeadType = domComponents.getType(COMPONENT_TABLE_HEAD)

  domComponents.addType(COMPONENT_TABLE_HEAD, {
    model: Object.assign({}, tableHeadType?.model ?? {}, {
      defaults: Object.assign({}, tableHeadType?.model?.prototype?.defaults ?? {}, {
        tagName: tagName,
        name:           'Table Head',
        'custom-name':  'Table Head',
        traits: [
          // {}
        ].concat(tableHeadType?.model?.prototype?.defaults?.traits ?? {}),
        //
      }),
    }, {
      // isComponent: el => toLowerCase(el.tagName) === tagName
    }),
    view: tableHeadType?.view ?? tableHeadType?.model?.prototype?.defaults?.view,
  })
}
