/** https://github.com/artf/grapesjs/blob/dev/src/dom_components/model/ComponentVideo.js **/

// GrapesJS Mixins
//import { toLowerCase } from 'grapesjs/src/utils/mixins'

// Local Constants
import {
  COMPONENT_VIDEO,
} from '../constants'

export function Video(domComponents, config, editor) {
  const tagName   = 'video'
  const videoType = domComponents.getType(COMPONENT_VIDEO)

  domComponents.addType(COMPONENT_VIDEO, {
    model: Object.assign({}, videoType?.model ?? {}, {
      defaults: Object.assign({}, videoType?.model?.prototype?.defaults ?? {}, {
        tagName: tagName,
        editable: true, // default false
        name:           'Video',
        'custom-name':  'Video',
        traits: [
          // {}
        ].concat(videoType?.model?.prototype?.defaults?.traits ?? {}),
        // videoId: '',
        // void: 0,
        // provider: 'so', // on change of provider, traits are switched
        // ytUrl: 'https://www.youtube.com/embed/',
        // ytncUrl: 'https://www.youtube-nocookie.com/embed/',
        // viUrl: 'https://player.vimeo.com/video/',
        // loop: 0,
        // poster: '',
        // muted: 0,
        // autoplay: 0,
        // controls: 1,
        // color: '',
        // list: '',
        // rel: 1, // YT related videos
        // modestbranding: 0, // YT modest branding
        // sources: [],
        // attributes: { allowfullscreen: 'allowfullscreen' }
      }),
    }, {
      ///**
      // * Detect if the passed element is a valid component.
      // * In case the element is valid an object abstracted
      // * from the element will be returned
      // * @param el {HTMLElement}
      // * @return {Object}
      // * @private
      // */
      /*
      isComponent(el) {
        const type  = 'video'
        const yt    = 'yt'
        const vi    = 'vi'
        const ytnc  = 'ytnc'

        let result = {}
        const { tagName, src } = el
        const isYtProv = /youtube\.com\/embed/.test(src)
        const isYtncProv = /youtube-nocookie\.com\/embed/.test(src)
        const isViProv = /player\.vimeo\.com\/video/.test(src)
        const isExtProv = isYtProv || isYtncProv || isViProv
        if (
          toLowerCase(tagName) == type ||
          (toLowerCase(tagName) == 'iframe' && isExtProv)
        ) {
          result = { type: tagName }
          if (src) result.src = src
          if (isExtProv) {
            if (isYtProv) result.provider = yt
            else if (isYtncProv) result.provider = ytnc
            else if (isViProv) result.provider = vi
          }
        }
        return result
      }
      */
    }),
    view: videoType?.view ?? videoType?.model?.prototype?.defaults?.view,
  })
}
