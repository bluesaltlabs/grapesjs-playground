/**  **/

// Local Constants
import {
  COMPONENT_DEFAULT,
  COMPONENT_MEDIA,
} from '../constants'

export function Media(domComponents, config, editor) {
  const defaultType = domComponents.getType(COMPONENT_DEFAULT)

  domComponents.addType(COMPONENT_MEDIA, {
    model: Object.assign({}, defaultType?.model ?? {}, {
      defaults: Object.assign({}, defaultType?.model?.prototype?.defaults ?? {}, {
        name:           'Layout',
        'custom-name':  'Layout',
        traits:         [
          // {}
        ].concat(defaultType?.model?.prototype?.defaults?.traits ?? {}),
        //
      }),
    }, {
      // isComponent: () => { return false }
    }),
    view: defaultType?.view ?? defaultType?.model?.prototype?.defaults?.view,
  })
}
