import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Maturità Scientifica — Raccolta Prove",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "it-IT",
    baseUrl: "gborghi.github.io/raccolta-maturita",
    ignorePatterns: ["private", "templates", ".obsidian", "tmp_imgs"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Lora",
        body: "Nunito Sans",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fffaf3",
          lightgray: "#f0e2d0",
          gray: "#9c8466",
          darkgray: "#3a322a",
          dark: "#2a1a0f",
          secondary: "#e8821e",
          tertiary: "#3a6ea5",
          highlight: "rgba(232, 130, 30, 0.10)",
          textHighlight: "#ffd27a99",
        },
        darkMode: {
          light: "#1c160f",
          lightgray: "#34291c",
          gray: "#b09a7e",
          darkgray: "#e8dccb",
          dark: "#fbf3e6",
          secondary: "#f0a04b",
          tertiary: "#7fa8d4",
          highlight: "rgba(240, 160, 75, 0.14)",
          textHighlight: "#ffd27a55",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({
        renderEngine: "katex",
        // custom macros used by the maturita-book solutions (\R \N \Z \de \wideparen)
        katexOptions: {
          macros: {
            "\\R": "\\mathbb{R}",
            "\\N": "\\mathbb{N}",
            "\\Z": "\\mathbb{Z}",
            "\\de": "\\,\\mathrm{d}",
            "\\wideparen": "\\overset{\\frown}{#1}",
          },
        },
      }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // CustomOgImages omitted to speed up the (large) build
    ],
  },
}

export default config
