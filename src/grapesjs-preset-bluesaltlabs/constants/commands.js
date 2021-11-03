// GrapesJS Component Code Editor Constants
import {
  //openCodeStr,
  getObject,
  getConstuctor,
} from 'grapesjs-component-code-editor/src/consts'

//---------- Built-In Commands -----------------------------------------------//
export const CMD_CANVAS_CLEAR           = 'canvas-clear'       // Clear all the content from the canvas (HTML and CSS)
export const CMD_COMPONENT_DELETE       = 'component-delete'   // Delete a component
export const CMD_COMPONENT_ENTER        = 'component-enter'    // Select the first children component of the selected one
export const CMD_COMPONENT_EXIT         = 'component-exit'     // Select the parent component of the current selected one
export const CMD_COMPONENT_NEXT         = 'component-next'     // Select the next sibling component
export const CMD_COMPONENT_PREV         = 'component-prev'     // Select the previous sibling component
export const CMD_COMPONENT_OUTLINE      = 'component-outline'  // Enable outline border on components
export const CMD_COMPONENT_OFFSET       = 'component-offset'   // Enable components offset (margins, paddings)
export const CMD_COMPONENT_SELECT       = 'component-select'   // Enable the process of selecting components in the canvas
export const CMD_COPY                   = 'copy'               // Copy the current selected component
export const CMD_PASTE                  = 'paste'              // Paste copied component
export const CMD_PREVIEW                = 'preview'            // Show the preview of the template in canvas
export const CMD_FULLSCREEN             = 'fullscreen'         // Set the editor fullscreen
export const CMD_OPEN_CODE              = 'open-code'          // Open a default panel with the template code
export const CMD_OPEN_LAYERS            = 'open-layers'        // Open a default panel with layers
export const CMD_OPEN_STYLES            = 'open-styles'        // Open a default panel with the style manager
export const CMD_OPEN_TRAITS            = 'open-traits'        // Open a default panel with the trait manager
export const CMD_OPEN_BLOCKS            = 'open-blocks'        // Open a default panel with the blocks
export const CMD_OPEN_ASSETS            = 'open-assets'        // Open a default panel with the assets
export const CMD_UNDO                   = 'undo'               // Call undo operation
export const CMD_REDO                   = 'redo'               // Call redo operation

export const CMD_CORE_CANVAS_CLEAR      = 'core:canvas-clear'
export const CMD_CORE_COMPONENT_DELETE  = 'core:component-delete'
export const CMD_CORE_COMPONENT_ENTER   = 'core:component-enter'
export const CMD_CORE_COMPONENT_EXIT    = 'core:component-exit'
export const CMD_CORE_COMPONENT_NEXT    = 'core:component-next'
export const CMD_CORE_COMPONENT_PREV    = 'core:component-prev'
export const CMD_CORE_COMPONENT_OUTLINE = 'core:component-outline'
export const CMD_CORE_COMPONENT_OFFSET  = 'core:component-offset'
export const CMD_CORE_COMPONENT_SELECT  = 'core:component-select'
export const CMD_CORE_COPY              = 'core:copy'
export const CMD_CORE_PASTE             = 'core:paste'
export const CMD_CORE_PREVIEW           = 'core:preview'
export const CMD_CORE_FULLSCREEN        = 'core:fullscreen'
export const CMD_CORE_OPEN_CODE         = 'core:open-code'
export const CMD_CORE_OPEN_LAYERS       = 'core:open-layers'
export const CMD_CORE_OPEN_STYLES       = 'core:open-styles'
export const CMD_CORE_OPEN_TRAITS       = 'core:open-traits'
export const CMD_CORE_OPEN_BLOCKS       = 'core:open-blocks'
export const CMD_CORE_OPEN_ASSETS       = 'core:open-assets'
export const CMD_CORE_UNDO              = 'core:undo'
export const CMD_CORE_REDO              = 'core:redo'


//---------- Component Code Editor Commands ----------------------------------//
//export const CMD_OPEN_CODE                  = openCodeStr // this is a core command, see above.
export const CMD_GET_CODE_EDITOR_OBJECT       = getObject
export const CMD_GET_CODE_EDITOR_CONSTRUCTOR  = getConstuctor

//---------- Commands --------------------------------------------------------//
export const CMD_CHANGE                 = 'change'          // todo: what is this for?
export const CMD_CHANGE_OPEN            = 'change:open'     // todo: what is this for?

export const CMD_STORE                  = 'store'           // todo: depreciated?

export const CMD_SWITCH_VISIBILITY      = 'sw-visibility'   // swv // todo: depreciated?
export const CMD_SET_DEVICE_DESKTOP     = 'set-device-desktop'
export const CMD_SET_DEVICE_MOBILE      = 'set-device-mobile'
export const CMD_SET_DEVICE_TABLET      = 'set-device-tablet'

export const CMD_HTML_CODE_EDITOR       = 'html-code-editor'
export const CMD_HTML_CODE_EDITOR_OPEN  = 'html-code-editor:open'
export const CMD_HTML_CODE_EDITOR_CLOSE = 'html-code-editor:close'
export const CMD_HTML_CODE_EDITOR_SAVE  = 'html-code-editor:save'
