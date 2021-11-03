/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/ComponentScript.js **/

// GrapesJS Mixins
//import { toLowerCase } from 'grapesjs/src/utils/mixins'

// Local Constants
import {
  COMPONENT_SCRIPT,
} from '../constants'

export function Script(domComponents, config, editor) {
  const tagName     = 'script'
  const scriptType  = domComponents.getType(COMPONENT_SCRIPT)

  domComponents.addType(COMPONENT_SCRIPT, {
    model: Object.assign({}, scriptType?.model ?? {}, {
      defaults: Object.assign({}, scriptType?.model?.prototype?.defaults ?? {}, {
        tagName:        tagName,
        name:           'Script',
        'custom-name':  'Script',
        traits:         [
          // {}
        ].concat(scriptType?.model?.prototype?.defaults?.traits ?? {}),
        // droppable: false,
        // draggable: false,
        // layerable: false,
      }),
    }, {
      /*
      isComponent(el) {
        if (toLowerCase(el.tagName) === type) {
          const result = { type }

          if(el.src) {
            result.src    = el.src
            result.onload = el.onload
          }

          return result
        }
      }
      */
    }),
    view: scriptType?.view ?? scriptType?.model?.prototype?.defaults?.view,
  })
}
