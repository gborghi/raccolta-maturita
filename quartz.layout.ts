import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.Navbar()],
  afterBody: [Component.CercaPage(), Component.PagedList()],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/gborghi/raccolta-maturita",
      "Generato con Quartz": "https://quartz.jzhao.xyz/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      // "Soluzioni" (per-prova) and "Svolgimenti" (per-item) hold the same worked
      // solutions at different granularity; show only one folder in the sidebar.
      // The atomic Svolgimenti notes still resolve (linked from each item).
      filterFn: (node) => node.slugSegment !== "tags" && node.slugSegment !== "Svolgimenti",
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      // "Soluzioni" (per-prova) and "Svolgimenti" (per-item) hold the same worked
      // solutions at different granularity; show only one folder in the sidebar.
      // The atomic Svolgimenti notes still resolve (linked from each item).
      filterFn: (node) => node.slugSegment !== "tags" && node.slugSegment !== "Svolgimenti",
    }),
  ],
  right: [],
}
