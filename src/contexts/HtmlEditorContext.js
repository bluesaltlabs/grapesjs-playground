import React, { createContext, useContext, useReducer } from 'react'

// Reducer action type constants
export const INITIALIZE_EDITOR = 'initializeEditor'

// Initial State
export const htmlEditorInitialState = {
  editor: null,
  contentSlug: '',
  contentID: 0,
  fromElement: false,
}

// Reducer
export const htmlEditorReducer = (state, action) => {
  switch(action.type) {
    case INITIALIZE_EDITOR: return { ...state, editor: action.editor }
    default: return state
  }
}

// Context
const HtmlEditorContext = createContext()

// Context Provider
export const HtmlEditorProvider = ({reducer, initialState, children}) => (
  <HtmlEditorContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </HtmlEditorContext.Provider>
)

// State
export const useHtmlEditorStateValue = () => useContext(HtmlEditorContext)

export default HtmlEditorContext
