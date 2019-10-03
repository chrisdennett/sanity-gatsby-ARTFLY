import MdEventNote from "react-icons/lib/md/event-note";
import { format } from "date-fns";
//MdEventNote

export default {
  name: "project",
  title: "Project",
  type: "document",
  icon: MdEventNote,
  fields: [
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
      type: "projectPortableText"
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
      name: "projectDate",
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
      projectDate: "projectDate",
      slug: "slug",
      media: "mainImage"
    },
    prepare({ title = "No title", projectDate, slug = {}, media }) {
      const dateSegment = format(projectDate, "YYYY/MM");
      const path = `/${dateSegment}/${slug.current}/`;
      return {
        title,
        media,
        subtitle: projectDate ? path : "Missing project date"
      };
    }
  }
};
