

// Local Constants
import {
  COMPONENT_DEFAULT,
  COMPONENT_HAS_REACT,
} from '../constants'

export function HasReact(domComponents, config, editor) {
  const tagName       = 'div'
  const defaultType   = domComponents.getType(COMPONENT_DEFAULT)
  const defaultModel  = defaultType?.model ?? {}

  domComponents.addType(COMPONENT_HAS_REACT, {

    // onRender({ ...unknown }) { // todo: is this a thing?
    //
    // }
  })
}
