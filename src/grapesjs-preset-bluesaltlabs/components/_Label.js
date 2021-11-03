/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/ComponentLabel.js **/

// GrapesJS Mixins
//import { toLowerCase } from 'grapesjs/src/utils/mixins'

// Local Constants
import {
  COMPONENT_LABEL,
} from '../constants'

export function Label(domComponents, config, editor) {
  const tagName   = 'label'
  const labelType = domComponents.getType(COMPONENT_LABEL)

  domComponents.addType(COMPONENT_LABEL, {
    model: Object.assign({}, labelType?.model ?? {}, {
      defaults: Object.assign({}, labelType?.model?.prototype?.defaults ?? {}, {
        tagName:        tagName,
        name:           'Label',
        'custom-name':  'Label',
        traits:         [
          {
            type:        'text',
            label:       'ID',
            name:        'id',
            placeholder: 'my_label',
          },
          {
            type:        'text',
            label:       'Title',
            name:        'title',
            placeholder: 'My Element'
          },
          {
            type:        'text',
            label:       'For',
            name:        'for',
            placeholder: 'my_input'
          },
        ].concat(labelType?.model?.prototype?.defaults?.traits ?? {}),
        //
      }),
    }, {
      // isComponent: el => toLowerCase(el.tagName) === tagName
    }),
    view: labelType?.view ?? labelType?.model?.prototype?.defaults?.view,
  })
}
