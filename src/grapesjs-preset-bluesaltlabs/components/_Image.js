/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/ComponentImage.js **/

// GrapesJS Mixins
//import { toLowerCase } from 'grapesjs/src/utils/mixins'

// Local Constants
import {
  COMPONENT_IMAGE,
} from '../constants'

export function Image(domComponents, config, editor) {
  const tagName   = 'img'
  const imageType = domComponents.getType(COMPONENT_IMAGE)

  domComponents.addType(COMPONENT_IMAGE, {
    model: Object.assign({}, imageType?.model ?? {}, {
      defaults: Object.assign({}, imageType?.model?.prototype?.defaults ?? {}, {
        tagName:        tagName,
        name:           'Image',
        'custom-name':  'Image',
        traits:         [
          {
            type: 'text',
            label: 'Alternate text',
            name: 'alt'
          }
        ].concat(imageType?.model?.prototype?.defaults?.traits ?? {}),
        // void: true,
        // droppable: 0,
        // editable: 1,
        // highlightable: 0,
        // resizable: { ratioDefault: 1 },
        // src: ``,

        // Fallback image in case the src can't be loaded
        // If you use SVG, xmlns="http://www.w3.org/2000/svg" is required
        // fallback: ``,

        // File to load asynchronously once the model is rendered
        // file: '',
      }),
    }, {
      // isComponent: el => toLowerCase(el.tagName) === tagName
    }),
    view: imageType?.view ?? imageType?.model?.prototype?.defaults?.view,
  })
}
