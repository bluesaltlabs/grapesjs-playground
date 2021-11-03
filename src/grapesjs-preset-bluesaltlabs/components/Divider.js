/**  **/

// Local Constants
import {
  COMPONENT_DEFAULT,
  COMPONENT_DIVIDER,
} from '../constants'

export function Divider(domComponents, config, editor) {
  const tagName       = 'hr'

  const defaultType   = domComponents.getType(COMPONENT_DEFAULT)
  const defaultModel  = defaultType?.model
  const defaultView   = defaultType?.view ?? defaultType?.model?.prototype?.defaults?.view

  domComponents.addType(COMPONENT_DIVIDER, {
    model: Object.assign({}, defaultType?.model ?? {}, {
      defaults: Object.assign({}, defaultModel?.prototype?.defaults ?? {}, {
        tagName:        tagName,
        name:           'Divider',
        'custom-name':  'Divider',
        // icon:           `<i class="gjs-fonts gjs-f-divider"></i>`, // todo
        editable:       false,
        void:           true,
        droppable:      false,
        traits:         [
          // {}
        ].concat(defaultType?.model?.prototype?.defaults?.traits ?? {}),
      }),
    }, {
      isComponent(el) {
        if(
          [COMPONENT_DIVIDER, tagName].includes( `${el.tagName}`.toLowerCase() ) ||
          el?.classList?.contains('divider')
        ) {
          return { type: COMPONENT_DIVIDER }
        }
      }
    }),
    view: defaultView,
  })
}
