import Root from "./components"
import link from "@frontity/html2react/processors/link"


const economicBlog = {
  name: "economic-blog",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isUrlVisible: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      }
    },
  },
  actions: {
    theme: {},
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
}

export default economicBlog