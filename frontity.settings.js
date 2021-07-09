const settings = {
  "name": "eade",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "economic-blog",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.elartedelaeconomia.com/",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
