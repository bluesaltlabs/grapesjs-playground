import React, { useEffect } from 'react'

import grapesjs from 'grapesjs'
//import '@grapesjs-preset-bluesaltlabs'

import storageManager from './storageManager'
import assetManager from './assetManager'

// Contexts and Context reducer constants
import {
  HtmlEditorProvider,
  useHtmlEditorStateValue,
  htmlEditorReducer,
  htmlEditorInitialState,
  INITIALIZE_EDITOR,
} from './contexts'

// export function getMountPointAttribute(attributeKey, defaultValue = null) {
//   //const mountPoint = document.getElementById(MOUNT_POINT_ID); // todo: doesn't work for whatever reason...
//   const mountPoint = document.getElementById('html-editor-app');

//   if(mountPoint && mountPoint.dataset && mountPoint.dataset.hasOwnProperty(attributeKey)) {
//     return mountPoint.dataset[attributeKey]
//   }

//   return defaultValue
// }

// export function getContentSlug() {
//   return getMountPointAttribute('contentSlug', '')
// }

// export function getContentID() {
//   return parseInt(getMountPointAttribute('contentId', 0))
// }

// export function getFromElement() {
//   return parseInt( getMountPointAttribute('fromElement', 0) ) > 0
// }

// export function getDomain() {
//   return getMountPointAttribute('domain', '')
// }


export function htmlEditor() {
  console.debug(config)
  const { domain } = config
  const canvas = {
      //scripts: [ '/js/public.js' ],
      //styles: [ '/css/public.css' ],
    }

  const defaultConfig = {
    container: `#${EDITOR_CONTAINER_ID}`,
    showDevices: false,
    canvas: canvas,
    height: '100vh',
    width: '100vw',
    showOffsets: true,
    fromElement: true,
    noticeOnUnload: true,
    storageManager: storageManager,
    assetManager: assetManager,
    //plugins: ['grapesjs-preset-bluesaltlabs'],
    pluginsOpts: {
      'grapesjs-preset-bluesaltlabs': {}
    },
  }

  const mergedConfig = Object.assign({}, defaultConfig, config)

  console.debug(mergedConfig)

  return grapesjs.init(mergedConfig)
}


export function createHtmlEditorComponent(settings, HtmlEditorComponent = null) {
  const { contentSlug, contentId, fromElement, domain } = settings

  const initialState = {
    ...htmlEditorInitialState,
    contentID: parseInt(contentId),
    contentSlug: contentSlug,
    fromElement: parseInt(fromElement) > 0,
    domain: domain,
  }

  return () => (
    <HtmlEditorProvider
      reducer={htmlEditorReducer}
      initialState={initialState}
    >
      <HtmlEditorComponent />
    </HtmlEditorProvider>
  )
}

export function ReactHtmlEditor() {
  const [{ editor, fromElement, domain }, htmlEditorDispatch ] = useHtmlEditorStateValue()

  useEffect(() => {
    const editorConfig = {
      fromElement: fromElement,
      domain: domain,
      //height: '100%',
      //showOffsets: 1,
      //noticeOnUnload: 0,
      //storageManager: { autoload: 0 },
      //container: '#gjs',
    }

    // Initialize the editor
    htmlEditorDispatch({
      type: INITIALIZE_EDITOR,
      editor: htmlEditor(editorConfig),
    })

  }, [])

  return <div id="html-editor" />
}

const HtmlEditorApp = createHtmlEditorComponent({}, ReactHtmlEditor)
