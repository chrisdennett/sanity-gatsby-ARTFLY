import MdLabel from "react-icons/lib/md/label";

export default {
  name: "tag",
  type: "document",
  title: "Tag",
  icon: MdLabel,
  fields: [
    {
      title: "Tag Type(s)",
      name: "tagTypes",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "radio",
        list: [
          { title: "Person", value: "person" },
          { title: "Organisation", value: "organisation" },
          { title: "Event", value: "event" },
          { title: "Content", value: "content" }
        ]
      }
    },
    {
      name: "name",
      type: "string",
      title: "Name"
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Used in the url to link to this person.",
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      name: "bio",
      title: "Bio",
      type: "bioPortableText"
    },
    {
      name: "image",
      title: "Image",
      type: "figure"
    }
  ],
  preview: {
    select: {
      title: "name",
      media: "image"
    }
  }
};
