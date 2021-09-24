//---------- Block Categories ------------------------------------------------//
export const BLOCK_CATEGORY_BASIC           = 'Basic'
export const BLOCK_CATEGORY_COMPONENTS      = 'Components'
export const BLOCK_CATEGORY_MEDIA           = 'Media'
export const BLOCK_CATEGORY_LAYOUT          = 'Layout'
export const BLOCK_CATEGORY_TABLES          = 'Tables'
export const BLOCK_CATEGORY_REACT           = 'React Components'
export const BLOCK_CATEGORY_MISC            = 'Misc'


//---------- Blocks ----------------------------------------------------------//
export const BLOCK_BLOCKQUOTE           = 'blockquote'
export const BLOCK_BLOCKQUOTE_FOOTER    = 'blockquote_footer'
export const BLOCK_BUTTON               = 'button'
export const BLOCK_BUTTON_GROUP         = 'button_group'
export const BLOCK_COLUMN               = 'column'
export const BLOCK_CONTAINER            = 'container'
export const BLOCK_HEADER               = 'header'
export const BLOCK_IMAGE                = 'image'
export const BLOCK_BOOTSTRAP_IMAGE      = 'bs_image'
export const BLOCK_LINK                 = 'link'
export const BLOCK_PAGE_SECTION         = 'page_section'
export const BLOCK_PAGE_SECTION_CONTENT = 'page_section_content'
export const BLOCK_PARAGRAPH            = 'paragraph'
export const BLOCK_ROW                  = 'row'
export const BLOCK_TABLE                = 'table'
export const BLOCK_TABLE_ROW            = 'table_row'
export const BLOCK_TABLE_CELL           = 'table_cell'
export const BLOCK_SPAN                 = 'span'
export const BLOCK_TEXT                 = 'text'
export const BLOCK_VIDEO                = 'video'
export const BLOCK_BOOTSTRAP_VIDEO      = 'bs_video'


//---------- Commands --------------------------------------------------------//
export const CMD_CANVAS_CLEAR           = 'canvas-clear'
export const CMD_CORE_CANVAS_CLEAR      = 'core:canvas-clear'
export const CMD_CHANGE                 = 'change'
export const CMD_CHANGE_OPEN            = 'change:open'
export const CMD_CORE_UNDO              = 'core:undo'
export const CMD_CORE_REDO              = 'core:redo'
export const CMD_CREATE_COMPONENT       = 'create-comp'     // crc
export const CMD_MOVE_COMPONENT         = 'move-comp'       // mvc
export const CMD_SWITCH_VISIBILITY      = 'sw-visibility'   // swv
export const CMD_PREVIEW                = 'preview'         // prv
export const CMD_FULLSCREEN             = 'fullscreen'      // ful
export const CMD_OPEN_STYLE_MANAGER     = 'open-sm'         // osm
export const CMD_OPEN_TRAIT_MANAGER     = 'open-tm'         // otm
export const CMD_OPEN_LAYERS            = 'open-layers'     // ola
export const CMD_OPEN_BLOCKS            = 'open-blocks'     // obl
export const CMD_STORE                  = 'store'

export const CMD_SET_DEVICE_DESKTOP     = 'set-device-desktop'
export const CMD_SET_DEVICE_MOBILE      = 'set-device-mobile'
export const CMD_SET_DEVICE_TABLET      = 'set-device-tablet'
export const CMD_UNDO                   = 'undo'
export const CMD_REDO                   = 'redo'
export const CMD_HTML_CODE_EDITOR       = 'html-code-editor'
export const CMD_HTML_CODE_EDITOR_OPEN  = 'html-code-editor:open'
export const CMD_HTML_CODE_EDITOR_CLOSE = 'html-code-editor:close'
export const CMD_HTML_CODE_EDITOR_SAVE  = 'html-code-editor:save'

export const CMD_OPEN_CODE              = 'open-code'


//---------- Events ----------------------------------------------------------//
export const EVENT_RUN                    = 'run'
export const EVENT_LOAD                   = 'load'
export const EVENT_CHANGES_COUNT          = 'change:changesCount'
export const EVENT_COMPONENT_SELECTED     = 'component:selected'
export const EVENT_ASSET_UPLOAD_START     = 'asset:upload:start'
export const EVENT_ASSET_UPLOAD_RESPONSE  = 'asset:upload:response'
export const EVENT_ASSET_UPLOAD_END       = 'asset:upload:end'
export const EVENT_ASSET_UPLOAD_ERROR     = 'asset:upload:error'
export const EVENT_STORAGE_START          = 'storage:start'
export const EVENT_STORAGE_END            = 'storage:end'
export const EVENT_STORAGE_ERROR          = 'storage:error'
export const EVENT_STORAGE_START_LOAD     = 'storage:start:load'
export const EVENT_STORAGE_END_LOAD       = 'storage:end:load'
export const EVENT_STORAGE_START_STORE    = 'storage:start:store'
export const EVENT_STORAGE_END_STORE      = 'storage:start:store'
export const EVENT_HTML_CODE_EDITOR_OPEN  = 'html-code-editor:open'
export const EVENT_HTML_CODE_EDITOR_CLOSE = 'html-code-editor:close'
export const EVENT_HTML_CODE_EDITOR_SAVE  = 'html-code-editor:save'


//---------- Components ------------------------------------------------------//
export const COMPONENT_DEFAULT              = 'default'
export const COMPONENT_BLOCKQUOTE           = 'blockquote'
export const COMPONENT_BLOCKQUOTE_FOOTER    = 'blockquote_footer'
export const COMPONENT_BUTTON               = 'button'
export const COMPONENT_BUTTON_GROUP         = 'button_group'
export const COMPONENT_COLUMN               = 'column'
export const COMPONENT_CONTAINER            = 'container'
export const COMPONENT_HEADER               = 'header'
export const COMPONENT_IMAGE                = 'image'
export const COMPONENT_BOOTSTRAP_IMAGE      = 'bs_image'
export const COMPONENT_LINK                 = 'link'
export const COMPONENT_PAGE_SECTION         = 'page_section'
export const COMPONENT_PAGE_SECTION_CONTENT = 'page_section_content'
export const COMPONENT_PARAGRAPH            = 'paragraph'
export const COMPONENT_ROW                  = 'row'
export const COMPONENT_TABLE                = 'table'
export const COMPONENT_TABLE_ROW            = 'table_row'
export const COMPONENT_TABLE_CELL           = 'table_cell'
export const COMPONENT_TEXT                 = 'text'
export const COMPONENT_VIDEO                = 'video'
export const COMPONENT_BOOTSTRAP_VIDEO      = 'bs_video'
export const COMPONENT_RESPONSIVE_EMBED     = 'bs_embed_responsive'


//---------- Panels ----------------------------------------------------------//
export const PANEL_DEFAULTS  = 'defaults'
export const PANEL_COMMANDS  = 'commands'
export const PANEL_OPTIONS   = 'options'
export const PANEL_VIEWS     = 'views'
export const PANEL_DEVICES   = 'devices-c'


//---------- Styles ----------------------------------------------------------//
export const SM_SECTOR_GENERAL      = 'General'
export const SM_SECTOR_LAYOUT       = 'Layout'
export const SM_SECTOR_TYPOGRAPHY   = 'Typography'
export const SM_SECTOR_DECORATIONS  = 'Decorations'
export const SM_SECTOR_EXTRA        = 'Extra'


//---------- Traits ----------------------------------------------------------//
export const TRAIT_TEXT             = 'text'
export const TRAIT_CLASS_SELECT     = 'class_select'
export const TRAIT_CONTENT          = 'content'


//---------- Messages --------------------------------------------------------//
export const MSG_CANVAS_CLEAR = 'Are you sure to clean the canvas? This text has been set.'
export const MSG_HTML_CODE_EDITOR_CLOSE = 'Are you sure you want to close the editor? Your changes will be lost.'


//---------- Editor ----------------------------------------------------------//
export const EDITOR_CONTAINER_ID  = 'gjs'
export const DEFAULT_CONFIG       = {
  editHtmlImportLabel: '', // todo?
  editHtmlImportContent: '', //editor.getHtml(),
  editHtmlSaveBtn: 'Save',
  editHtmlSaveTitle: 'Edit HTML',
  editHtmlViewerOptions: {
    codeName: 'htmlmixed',
    readOnly: 0,
    theme: 'hopscotch',
    autoBeautify: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    lineWrapping: true,
    styleActiveLine: true,
    smartIndent: true,
    indentWithTabs: true
  },
  optsComponentCodeEditor: {
    editJs: true,
    cleanCssBtn: true,
  },
  optsParserPostCss: {},
  optsCustomCode: {
    blockCustomCode: {
      category: {
        id: BLOCK_CATEGORY_MISC,
        label: BLOCK_CATEGORY_MISC,
        open: false,
      },
      label: 'Custom Code',
      attributes: { class: 'fas fa-code' },
    }
  }
}


//---------- Misc ------------------------------------------------------------//
export const BOOTSTRAP_BUTTON_SIZES = {
  'lg': 'Large',
  'sm': 'Small'
}

export const BOOSTRAP_SIZES = {
  'sm': 'Small',
  'md': 'Medium',
  'lg': 'Large',
  'xl': 'Extra Large'
}

export const BOOTSTRAP_CONTEXTS = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'light',
  'dark',
]
