import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Roblox Luau Style Guide",
  description:
    "This style guide aims to provide best practices for writing Luau code in Roblox.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide" },
    ],

    sidebar: [
      {
        items: [{ text: "Guide", link: "/guide" }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/synpixel/roblox-luau-style-guide",
      },
    ],
  },
});
