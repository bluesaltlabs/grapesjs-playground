/**  **/

// Local Constants
import {
  COMPONENT_DEFAULT,
  COMPONENT_HEADING,
  TRAIT_CLASS_SELECT,
} from '../constants'

export function Heading(domComponents, config, editor) {
  const tagName     = 'h1'

  const textType    = domComponents.getType('text')
  const textModel   = textType?.model
  const textView    = textType?.view ?? textType?.model?.prototype?.defaults?.view

  domComponents.addType(COMPONENT_HEADING, {
    model: textModel.extend({
      defaults: Object.assign({}, textModel.prototype.defaults, {
        tagName:        tagName,
        name:           'Heading',
        'custom-name':  'Heading',
        // icon:           ``, // todo
        traits: [
          {
            type: TRAIT_CLASS_SELECT,
            options: [
              { value: 'h1', name: 'One (largest)' },
              { value: 'h2', name: 'Two' },
              { value: 'h3', name: 'Three' },
              { value: 'h4', name: 'Four' },
              { value: 'h5', name: 'Five' },
              { value: 'h6', name: 'Six (smallest)' },
            ],
            label: 'Size',
            name: 'tagName',
            changeProp: 1,
          },
          {
            type: TRAIT_CLASS_SELECT,
            options: [
              { value: '',          name: 'None' },
              { value: 'display-1', name: 'One (largest)' },
              { value: 'display-2', name: 'Two' },
              { value: 'display-3', name: 'Three' },
              { value: 'display-4', name: 'Four (smallest)' },
            ],
            label: 'Display Heading',
          },
        ].concat(textModel?.prototype?.defaults?.traits ?? {}),
      }),
    }, {
      isComponent(el) {
        if(
          [COMPONENT_HEADING, 'header', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes( `${el.tagName}`.toLowerCase() )
        ) {
          return { type: COMPONENT_HEADING }
        }
      }
    }),
    view: textView,
  })
}
