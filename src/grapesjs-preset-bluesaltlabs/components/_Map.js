/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/ComponentMap.js **/

// GrapesJS
//import { toLowerCase } from 'grapesjs/src/utils/mixins'
//import OComponent from 'grapesjs/src/dom_components/model/Component'

// Local Constants
import {
  COMPONENT_MAP,
} from '../constants'

export function Map(domComponents, config, editor) {
  const tagName = 'iframe'
  const mapType = domComponents.getType(COMPONENT_MAP)

  domComponents.addType(COMPONENT_MAP, {
    model: Object.assign({}, mapType?.model ?? {}, {
      defaults: Object.assign({}, mapType?.model?.prototype?.defaults ?? {}, {
        tagName: tagName,
        name: 'Map',
        'custom-name': 'Map',
        traits: [
          {
            label: 'Address',
            name: 'address',
            placeholder: 'eg. London, UK',
            changeProp: 1,
          },
          {
            type: 'select',
            label: 'Map type',
            name: 'mapType',
            changeProp: 1,
            options: [
              { value: 'q', name: 'Roadmap' },
              { value: 'w', name: 'Satellite' },
            ]
          },
          {
            label: 'Zoom',
            name: 'zoom',
            type: 'range',
            min: '1',
            max: '20',
            changeProp: 1,
          },
        ].concat(mapType?.model?.prototype?.defaults?.traits ?? {}),
        // src: '',
        // void: 0,
        // mapUrl: 'https://maps.google.com/maps',
        // mapType: 'q',
        // address: '',
        // zoom: '1',
        // attributes: { frameborder: 0 },
        // toolbar: OComponent.prototype.defaults.toolbar,
      })
    }, {
      ///**
      // * Detect if the passed element is a valid component.
      // * In case the element is valid an object abstracted
      // * from the element will be returned
      // * @param {HTMLElement}
      // * @return {Object}
      // * @private
      // */
      /*
      isComponent(el) {
        var result = '';
        if (
          toLowerCase(el.tagName) == 'iframe' &&
          /maps\.google\.com/.test(el.src)
        ) {
          result = { type: 'map', src: el.src };
        }
        return result;
      }
      */
    }),
    view: mapType?.view ?? mapType?.model?.prototype?.defaults?.view,
  })
}
