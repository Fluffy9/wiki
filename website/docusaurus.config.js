// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NEAR Wiki",
  tagline: "NEAR Wiki",
  url: "https://wiki.near.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "near", // Usually your GitHub org/user name.
  projectName: "wiki", // Usually your repo name.
  scripts: [
    "/js/hotjar.js",
    "https://use.fontawesome.com/releases/v5.15.4/js/all.js",
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&display=swap",
    "https://cdn.statically.io/gh/nearprotocol/near-global-footer/main/footer.css",
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: "/",
          path: "../wiki",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/near/wiki/edit/master/website",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
        gtag: {
          trackingID: "G-Z976HN06X8",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
      },
      navbar: {
        title: "Wiki",
        logo: {
          alt: "NEAR Logo",
          src: "img/near_logo.svg",
        },
        items: [
          {
            href: "/",
            position: "left",
            label: "Getting Started",
          },
          {
            href: "/ecosystem/dapps",
            position: "left",
            label: "Ecosystem",
          },
          /*{
            href: '/technology',
            position: 'left',
            label: 'Technology',
          },
          {
            href: '/validators',
            position: 'left',
            label: 'Validators',
          },
          {
            href: '/community',
            position: 'left',
            label: 'Community',
          },*/
          {
            href: "/governance",
            position: "left",
            label: "Governance",
          } /*
          {
            href: '/resources',
            position: 'left',
            label: 'Resources',
          },*/,
          { 
            href: "/knowledge-base/collab",
            position: "left",
            label: "Knowledge Base",
          },
          {
            href: "https://github.com/near/wiki",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: require("prism-react-renderer/themes/github"),
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "J7VARGY7RM",
        // Public API key: it is safe to commit it
        apiKey: "4723f2a6e5ef0c7f5c6d17feb6362b19",
        indexName: "wiki-near",
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "near\\.org|nomicon\\.io",
        // Optional: Algolia search parameters
        searchParameters: {},
        //... other Algolia params
      },
    }),
};

module.exports = config;
