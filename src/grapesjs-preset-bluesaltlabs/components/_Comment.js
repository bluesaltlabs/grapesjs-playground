/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/ComponentComment.js **/

// Local Constants
import {
  COMPONENT_COMMENT,
} from '../constants'

export function Comment(domComponents, config, editor) {
  const commentType = domComponents.getType(COMPONENT_COMMENT)

  domComponents.addType(COMPONENT_COMMENT, {
    model: Object.assign({}, commentType?.model ?? {}, {
      defaults: Object.assign({}, commentType?.model?.prototype?.defaults ?? {}, {
        name: 'Comment',
        'custom-name': 'Comment',
        traits: [
          // {}
        ].concat(commentType?.model?.prototype?.defaults?.traits ?? {}),
        //
      }),
    }, {
      // isComponent: ???
    }),
    view: commentType?.view ?? commentType?.model?.prototype?.defaults?.view,
  })
}
