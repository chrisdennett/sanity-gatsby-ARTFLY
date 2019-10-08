import AddAPhoto from "react-icons/lib/md/add-a-photo";

export default {
  name: "figure",
  type: "image",
  title: "Photo",
  icon: AddAPhoto,
  options: {
    hotspot: true
  },
  fields: [
    {
      title: "Caption",
      name: "caption",
      type: "string",
      options: {
        isHighlighted: true
      }
    },
    {
      name: "alt",
      type: "string",
      title: "Description for screen readers",
      validation: Rule => Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption"
    }
  }
};
