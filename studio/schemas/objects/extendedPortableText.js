import InsertLink from "react-icons/lib/md/insert-link";
import LinkExternal from "react-icons/lib/fa/external-link";

export default {
  title: "Portable Text",
  name: "extendedPortableText",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" }
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "Internal Link",
            name: "internalLink",
            icon: InsertLink,
            type: "object",
            fields: [
              {
                name: "item",
                type: "reference",
                to: [
                  {
                    type: "project"
                  },
                  {
                    type: "tag"
                  }
                ]
              }
            ]
          },
          {
            title: "URL",
            name: "link",
            icon: LinkExternal,
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url"
              },
              {
                title: "Open in a new tab",
                name: "blank",
                type: "boolean"
              }
            ]
          }
        ]
      }
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "gallery"
    },
    {
      type: "mediaPlayer"
    },
    {
      type: "twitter"
    },
    {
      type: "facebook"
    }
  ]
};
