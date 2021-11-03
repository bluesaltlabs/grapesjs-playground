/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/ComponentSvgIn.js **/

// Local Constants
import {
  COMPONENT_SVG_IN,
} from '../constants'

export function SvgIn(domComponents, config, editor) {
  const svgInType   = domComponents.getType(COMPONENT_SVG_IN)

  domComponents.addType(COMPONENT_SVG_IN, {
    model: Object.assign({}, svgInType?.model ?? {}, {
      defaults: Object.assign({}, svgInType?.model?.prototype?.defaults ?? {}, {
        name:           'Svg Inner',
        'custom-name':  'Svg Inner',
        traits: [
          // {}
        ].concat(svgInType?.model?.prototype?.defaults?.traits ?? {}),
        // selectable: false,
        // hoverable: false,
        // layerable: false,
      }),
    }, {
      // isComponent: (el, opts = {}) => !!opts.inSvg
    }),
    view: svgInType?.view ?? svgInType?.model?.prototype?.defaults?.view,
  })
}
