/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/ComponentWrapper.js **/

// Local Constants
import {
  COMPONENT_WRAPPER,
} from '../constants'

export function Wrapper(domComponents, config, editor) {
  const wrapperType = domComponents.getType(COMPONENT_WRAPPER)

  domComponents.addType(COMPONENT_WRAPPER, {
    model: Object.assign({}, wrapperType?.model ?? {}, {
      defaults: Object.assign({}, wrapperType?.model?.prototype?.defaults ?? {}, {
        __wrapper:      1,
        name:           'Wrapper',
        'custom-name':  'Wrapper',
        removable:      false,
        copyable:       false,
        draggable:      false,
        traits:         [
          // {}
        ].concat(wrapperType?.model?.prototype?.defaults?.traits ?? {}),
        // components: [],
        // stylable: [
        //   'background',
        //   'background-color',
        //   'background-image',
        //   'background-repeat',
        //   'background-attachment',
        //   'background-position',
        //   'background-size'
        // ]
      }),
    }, {
      // isComponent: () => { return false }
    }),
    view: wrapperType?.view ?? wrapperType?.model?.prototype?.defaults?.view,
  })
}
