import type { Site, Page, Links, Socials, Contact } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Jarema",
  DESCRIPTION: "Hi there, I'm Jarema.",
  AUTHOR: "Jarema",
}

// Work
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "A partial list of my works.",
}

// Jobs
export const JOBS: Page = {
  TITLE: "Jobs",
  DESCRIPTION: "A partial list of places I have worked at.",
}

// Uses
export const USES: Page = {
  TITLE: "Uses",
  DESCRIPTION: "All the things I use on a daily basis.",
}

// About
export const ABOUT: Page = {
  TITLE: "About me",
  DESCRIPTION: "My biography.",
}

// Support
export const SUPPORT: Page = {
  TITLE: "Support me",
  DESCRIPTION: "Want to support me? Here's how.",
}

// Contact
export const CONTACT: Page = {
  TITLE: "Contact",
  DESCRIPTION: "How to reach me.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Slashes
export const SLASHES: Page = {
  TITLE: "Slashes",
  DESCRIPTION: "A list of all slash pages on this site.",
}

// Colophon
export const COLOPHON: Page = {
  TITLE: "Colophon",
  DESCRIPTION: "How to reach me.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Contact",
    HREF: "/contact",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
  {
    TEXT: "Slashes",
    HREF: "/slashes",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "hi@jar.tf",
    HREF: "mailto:hi@jar.tf",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "jartf",
    HREF: "https://github.com/jartf"
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "jartf_",
    HREF: "https://twitter.com/jartf_",
  },
]
