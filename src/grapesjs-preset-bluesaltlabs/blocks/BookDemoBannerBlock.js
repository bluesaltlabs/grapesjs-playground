/**  **/

// Local Constants
import {
  BLOCK_CATEGORY_SETTINGS_TEMPLATES,
  BLOCK_BOOK_DEMO_BANNER,
} from '../constants'

// Helpers
import {
  getBlockLabelHtml,
} from '../helpers'

export function BookDemoBannerBlock(blockManager, config, editor) {
  const formLead = null // todo: parameter? automatically retrieved?

  blockManager.add(BLOCK_BOOK_DEMO_BANNER, {
    id: BLOCK_BOOK_DEMO_BANNER,
    category: BLOCK_CATEGORY_SETTINGS_TEMPLATES,
    label: bookDemoBannerLabel,
    content:
`<section class="page-section bg-indigo">
    <div class="container page-section-content text-center text-xl-left">
        <div class="row">
            <div class="col-xl-9">
                <h2 class="h1 mb-4 mb-xl-0">Learn more about OpenEye's business intelligent software solution</h2>
            </div>
            <div class="col-xl-3 d-xl-flex align-items-xl-center">
                <a class="btn btn-lg btn-outline-light d-inline-block" href="/book-a-demo?lead=${formLead}">
                    Schedule A Demo
                </a>
            </div>
        </div>
    </div>
</section>`,
  })
}

const bookDemoBannerLabel = getBlockLabelHtml('Book Demo Banner') // todo: icon
