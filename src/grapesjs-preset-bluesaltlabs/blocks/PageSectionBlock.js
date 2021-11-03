// HTML Editor Constants
import {
  BLOCK_CATEGORY_SETTINGS_LAYOUT,
  BLOCK_PAGE_SECTION,
  COMPONENT_PAGE_SECTION,
  COMPONENT_PAGE_SECTION_CONTENT,
  COMPONENT_HEADING,
  COMPONENT_PARAGRAPH,
} from '../constants'

// Helpers
import {
  getBlockLabelHtml,
} from '../helpers'

export function PageSectionBlock(blockManager, config, editor) {
  blockManager.add(BLOCK_PAGE_SECTION, {
    id: BLOCK_PAGE_SECTION,
    category: BLOCK_CATEGORY_SETTINGS_LAYOUT,
    label: pageSectionLabel,
    content:
      `<section class="page-section bg-default" data-gjs-type="${COMPONENT_PAGE_SECTION}">
         <div class="container page-section-content" data-gjs-type="${COMPONENT_PAGE_SECTION_CONTENT}">
           <h1 class="h1" data-gjs-type="${COMPONENT_HEADING}">A New Page Section</h1>
           <p class="lead" data-gjs-type="${COMPONENT_PARAGRAPH}">Text for a new page section</p>
         </div>
      </section>`
  })
}

const pageSectionLabel = getBlockLabelHtml('Page Section', `<i class="gjs-fonts gjs-f-hero"></i>`)
