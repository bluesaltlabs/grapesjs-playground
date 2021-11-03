/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/ComponentSvg.js **/

// GrapesJS Mixins
//import { toLowerCase } from 'grapesjs/src/utils/mixins'

// Local Constants
import {
  COMPONENT_SVG,
} from '../constants'

export function Svg(domComponents, config, editor) {
  const tagName = 'svg'
  const svgType = domComponents.getType(COMPONENT_SVG)

  domComponents.addType(COMPONENT_SVG, {
    model: Object.assign({}, svgType?.model ?? {}, {
      defaults: Object.assign({}, svgType?.model?.prototype?.defaults ?? {}, {
        tagName:        tagName,
        name:           'Svg',
        'custom-name':  'Svg',
        traits:         [
          // {}
        ].concat(svgType?.model?.prototype?.defaults?.traits ?? {}),
        // highlightable: 0,
        // resizable: { ratioDefault: 1 }
      }),
    }, {
      // isComponent: el => toLowerCase(el.tagName) === tagName
    }),
    view: svgType?.view ?? svgType?.model?.prototype?.defaults?.view,
  })
}
