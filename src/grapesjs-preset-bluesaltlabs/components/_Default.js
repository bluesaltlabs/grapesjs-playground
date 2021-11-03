/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/Component.js **/

// Local Constants
import {
  COMPONENT_DEFAULT,
} from '../constants'

export function Default(domComponents, config, editor) {
  const tagName       = 'div'
  const defaultType   = domComponents.getType(COMPONENT_DEFAULT)
  const defaultModel  = defaultType?.model ?? {}

  domComponents.addType(COMPONENT_DEFAULT, {
    model: Object.assign({}, defaultType?.model ?? {}, {
      defaults: Object.assign({}, defaultType?.model?.prototype?.defaults ?? {}, {
        tagName: tagName,
        name: '',
        'custom-name': '',
        content: '',
        traits: [
          //{
          //  type: 'text',
          //  label: 'ID',
          //  name: 'id',
          //  placeholder: 'my_element'
          //},
          //{
          //  type: 'text',
          //  label: 'Title',
          //  name: 'title',
          //  placeholder: 'My Element'
          //},
        ].concat(defaultModel?.prototype?.defaults?.traits ?? {}),
        // type: '',
        // removable: true,
        // draggable: true,
        // droppable: true,
        // badgable: true,
        // stylable: true,
        // 'stylable-require': '',
        // 'style-signature': '',
        // unstylable: '',
        // highlightable: true,
        // copyable: true,
        // resizable: false,
        // editable: false,
        // layerable: true,
        // selectable: true,
        // hoverable: true,
        // void: false,
        // state: '', // Indicates if the component is in some CSS state like ':hover', ':active', etc.
        // status: '', // State, eg. 'selected'
        // icon: '',
        // style: '',
        // styles: '', // Component related styles
        // classes: '', // Array of classes
        // script: '',
        // 'script-props': '',
        // 'script-export': '',
        // attributes: '',
        // propagate: '',
        // dmode: '',
        // toolbar: null,
        // [keySymbol]: 0,
        // [keySymbols]: 0,
        // [keySymbolOvrd]: 0,
        // _undo: true,
        // _undoexc: ['status', 'open'],
      }),
    }, {
    // isComponent: ???
  }),
    view: defaultType?.view ?? defaultType?.model?.prototype?.defaults?.view,
  })
}
