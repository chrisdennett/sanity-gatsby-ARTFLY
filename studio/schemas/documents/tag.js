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
          { title: "Sponsor", value: "sponsor" },
          { title: "Category", value: "category" }
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
      name: "contactDetails",
      title: "Contact Details",
      type: "document",
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: "email", type: "string", title: "Email" },
        { name: "twitter", type: "string", title: "Twitter" },
        { name: "instagram", type: "string", title: "Instagram" },
        { name: "facebook", type: "string", title: "Facebook" },
        { name: "linkedIn", type: "string", title: "LinkedIn" },
        { name: "youTube", type: "string", title: "YouTube" }
      ]
    },
    {
      name: "bio",
      title: "Bio",
      type: "extendedPortableText"
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
