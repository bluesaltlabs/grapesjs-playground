import React, { useEffect } from 'react'

import grapesjs from 'grapesjs'
//import '@grapesjs-preset-bluesaltlabs'
import '../grapesjs-preset-bluesaltlabs'

// Constants
import {
  EDITOR_CONTAINER_ID,
} from '../constants'

//import storageManager from '../storageManager'
//import assetManager from '../assetManager'

// Contexts and Context reducer constants
import {
  HtmlEditorProvider,
  useHtmlEditorStateValue,
  htmlEditorReducer,
  htmlEditorInitialState,
  INITIALIZE_EDITOR,
} from '../contexts'

export function htmlEditor(config) {
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
    //storageManager: storageManager,
    //assetManager: assetManager,
    //plugins: ['grapesjs-preset-bluesaltlabs'],
    //pluginsOpts: {
    //  'grapesjs-preset-bluesaltlabs': {}
    //},
  }

  const mergedConfig = Object.assign({}, defaultConfig, config)

  console.debug(mergedConfig)

  return grapesjs.init(mergedConfig)
}


export function createHtmlEditorComponent(settings, HtmlEditorComponent = null) {
  const { contentSlug, contentId, fromElement } = settings

  const initialState = {
    ...htmlEditorInitialState,
    contentID: parseInt(contentId),
    contentSlug: contentSlug,
    fromElement: parseInt(fromElement) > 0,
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
  const [{ fromElement }, htmlEditorDispatch ] = useHtmlEditorStateValue()

  useEffect(() => {
    const editorConfig = {
      fromElement: fromElement
    }

    // Initialize the editor
    htmlEditorDispatch({
      type: INITIALIZE_EDITOR,
      editor: htmlEditor(editorConfig),
    })

  }, [])

  return <div id={EDITOR_CONTAINER_ID} />
}

export const HtmlEditorApp = createHtmlEditorComponent({}, ReactHtmlEditor)
