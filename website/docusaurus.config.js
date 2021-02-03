module.exports = {
  title: "GSG | Fundamentals Course",
  tagline:
    "A course to get your started with the basics of web development from GSG",
  url: "https://fundamentals-course.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  favicon: "img/favicon.ico",
  organizationName: "gazaskygeeks", // Usually your GitHub org/user name.
  projectName: "Fundamentals-course", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Fundamentals Course",
      logo: {
        alt: "GSG Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "Week%2001/README",
          activeBasePath: "coursebook",
          label: "Coursebook",
          position: "left",
        },
        {
          href: "https://github.com/gazaskygeeks/Fundamentals-course",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Style Guide",
        //       to: "docs/",
        //     },
        //     {
        //       label: "Second Doc",
        //       to: "docs/doc2/",
        //     },
        //   ],
        // },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "blog",
        //     },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/facebook/docusaurus",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          path: "../coursebook",
          routeBasePath: "/",
          editUrl:
            "https://github.com/gazaskygeeks/Fundamentals-course/edit/master/website",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
