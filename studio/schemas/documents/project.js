import MdEventNote from "react-icons/lib/md/event-note";
// import { format } from "date-fns";
//MdEventNote

export default {
  name: "project",
  title: "Project",
  type: "document",
  icon: MdEventNote,
  fields: [
    {
      title: "TYPE",
      name: "projectTypes",
      type: "string",
      options: {
        layout: "radio",
        direction: "horizontal",
        list: [
          { title: "DRAFT", value: "draft" },
          { title: "PROJECT", value: "project" },
          { title: "IDEA", value: "idea" },
          { title: "POST", value: "post" }
        ]
      }
    },
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "body",
      title: "Body",
      type: "extendedPortableText"
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "simplePortableText"
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "figure"
    },
    {
      name: "publishedAt",
      title: "Project Date",
      type: "datetime"
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }]
    }
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "mainImage"
    },
    prepare({ title = "No title", publishedAt, slug = {}, media }) {
      // const dateSegment = format(publishedAt, "YYYY/MM");
      const path = `${slug.current}/`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : "Missing project date"
      };
    }
  }
};
