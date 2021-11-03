/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/ComponentLink.js **/

// GrapesJS Mixins
//import { toLowerCase } from 'grapesjs/src/utils/mixins'

// Local Constants
import {
  COMPONENT_LINK,
} from '../constants'

export function Link(domComponents, config, editor) {
  const tagName     = 'a'
//  const linkType    = domComponents.getType(COMPONENT_LINK)


  domComponents.addType(COMPONENT_LINK, {
    // isComponent: (el) {
      // todo?
    // },
    extend: COMPONENT_LINK,
    model: {
      defaults: {
        tagName:        tagName,
        name:           'Link',
        'custom-name':  'Link',
        // classes:        [],
        droppable:      true,
        content:        `New Link`,
      },
    },
    // extendView: COMPONENT_LINK,
    // view: {
    //   //
    // },
  })
}
