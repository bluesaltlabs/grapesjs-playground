/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/ComponentTable.js **/

// GrapesJS Mixins
//import { toLowerCase } from 'grapesjs/src/utils/mixins'

// Local Constants
import {
  COMPONENT_TABLE,
  COMPONENT_TABLE_BODY,
  COMPONENT_TABLE_HEAD,
  COMPONENT_TABLE_FOOT,
  TRAIT_CLASS_SELECT,
} from '../constants'

export function Table(domComponents, config, editor) {
  const tagName     = 'table'
  const tableType   = domComponents.getType(COMPONENT_TABLE)

  domComponents.addType(COMPONENT_TABLE, {
    model: Object.assign({}, tableType?.model ?? {}, {
      defaults: Object.assign({}, tableType?.model?.prototype?.defaults ?? {}, {
        tagName:        tagName,
        name:           'Table',
        'custom-name':  'Table',
        droppable: [COMPONENT_TABLE_BODY, COMPONENT_TABLE_HEAD, COMPONENT_TABLE_FOOT],
        traits: [
          // {}
        ].concat(tableType?.model?.prototype?.defaults?.traits ?? {}),
      }),
    }, {
      // isComponent: el => toLowerCase(el.tagName) === tagName
    }),
    view: tableType?.view ?? tableType?.model?.prototype?.defaults?.view,
  })
}

/*
// todo
export function Table(domComponents, config, editor) {

  const defaultType = domComponents.getType('default')
  const defaultModel = defaultType.model
  const defaultView = defaultType.view

  domComponents.addType(COMPONENT_TABLE, {
    model: defaultModel.extend({
      defaults: {
        ...(defaultModel.prototype.defaults ?? {}),
        ...({
          name: 'Table',
          'custom-name': 'Table',
          tagName: 'table',
          draggable: true,
          droppable: true,
          traits: [
            {
              type: TRAIT_CLASS_SELECT,
              options: [
                {value: 'container', name: 'Fixed'},
                {value: 'container-fluid', name: 'Fluid'}
              ],
              label: 'Width'
            },
            {
              type: TRAIT_CLASS_SELECT,
              options: [
                {value: '', name: 'No'},
                {value: 'table-responsive', name: 'Always'},
                ...Object.keys(BOOSTRAP_SIZES).map((k) => { return {value: `table-responsive-${k}`, name: BOOSTRAP_SIZES[k]} })
              ],
              label: 'Responsive?'
            },
            {
              type: TRAIT_CLASS_SELECT,
              options: [
                {value: '', name: 'None'},
                ... BOOTSTRAP_CONTEXTS.map((v) => { return {value: `table-${v}`, name: `Table ${capitalize(v)}`} }),
                ... BOOTSTRAP_CONTEXTS.map((v) => { return {value: `bg-${v}`, name: `Background ${capitalize(v)}`} }),
              ],
              label: 'Context'
            },
            {
              type: TRAIT_CLASS_SELECT,
              options: [
                {value: '', name: 'No'},
                {value: 'table-striped', name: 'Yes'}
              ],
              label: 'Striped?'
            },
            {
              type: TRAIT_CLASS_SELECT,
              options: [
                {value: '', name: 'No'},
                {value: 'table-dark', name: 'Yes'}
              ],
              label: 'Dark?'
            },
            {
              type: TRAIT_CLASS_SELECT,
              options: [
                {value: '', name: 'No'},
                {value: 'table-hover', name: 'Yes'}
              ],
              label: 'Hover?'
            },
            {
              type: TRAIT_CLASS_SELECT,
              options: [
                {value: '', name: 'No'},
                {value: 'table-sm', name: 'Yes'}
              ],
              label: 'Small?'
            },
            {
              type: TRAIT_CLASS_SELECT,
              options: [
                {value: '', name: 'Default'},
                {value: 'table-bordered', name: 'Bordered'},
                {value: 'table-borderless', name: 'Borderless'},
              ],
              label: 'Borders'
            },
          ].concat(tableModel.prototype.defaults.traits),
        })
        }
      }, {
      isComponent(el) {
        if(el && (
          ( el.tagName && (`${el.tagName}`.toLowerCase() === 'table') )
        )) {
          return { type: COMPONENT_TABLE }
        }
      }
    }),
    view: defaultView,
  })

}
*/
