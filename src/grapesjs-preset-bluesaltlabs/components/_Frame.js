/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/ComponentFrame.js **/

// Local Constants
import {
  COMPONENT_FRAME,
} from '../constants'

export function Frame(domComponents, config, editor) {
  const tagName     = 'iframe'
  const frameType   = domComponents.getType(COMPONENT_FRAME)

  domComponents.addType(COMPONENT_FRAME, {
    model: Object.assign({}, frameType?.model ?? {}, {
      defaults: Object.assign({}, frameType?.model?.prototype?.defaults ?? {}, {
        tagName: tagName,
        traits:  [
          {
            type: 'text',
            label: 'ID',
            name: 'id',
            placeholder: 'my_element'
          },
          {
            type: 'text',
            label: 'Title',
            name: 'title',
            placeholder: 'My Element'
          },
          {
            type: 'text',
            label: 'Source (URL)',
            name: 'src',
            placeholder: 'https://www.example.com'
          }
        ].concat(frameType?.model?.prototype?.defaults?.traits ?? {}),
        // droppable: false,
        // resizable: true,
        // attributes: { frameborder: '0' }
      }),
    }),
    view: frameType?.view ?? frameType?.model?.prototype?.defaults?.view,
  })
}
