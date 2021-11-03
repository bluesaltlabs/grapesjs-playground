/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/ComponentText.js **/

// Local Constants
import {
  COMPONENT_TEXT,
} from '../constants'

export function Text(domComponents, config, editor) {
  const textType = domComponents.getType(COMPONENT_TEXT)

  domComponents.addType(COMPONENT_TEXT, {
    // isComponent: (el) {
    // todo?
    // },
    extend: COMPONENT_TEXT,
    model: {
      editable: true,
      defaults: {

      }
    },
    extendView: COMPONENT_TEXT,
    view: {
      // onDisable() {
      //   // this.disableEditing();
      // },
    },
  })

  // domComponents.addType(COMPONENT_TEXT, {
  //   model: Object.assign({}, textType?.model ?? {}, {
  //     defaults: Object.assign({}, textType?.model?.prototype?.defaults ?? {}, {
  //       name:           'Text',
  //       'custom-name':  'Text',
  //       droppable:      false,
  //       editable:       true,
  //       traits: [
  //         // {}
  //       ].concat(textType?.model?.prototype?.defaults?.traits ?? {}),
  //       //
  //     }),
  //   }, {
  //     // isComponent: ???
  //   }),
  //   view: textType?.view ?? textType?.model?.prototype?.defaults?.view,
  // })
}
