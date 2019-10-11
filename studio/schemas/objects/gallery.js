import MdPhotoLibrary from "react-icons/lib/md/photo-library";

export default {
  title: "Gallery",
  name: "gallery",
  type: "object",
  icon: MdPhotoLibrary,
  fields: [
    {
      title: "Pics",
      name: "pics",
      type: "array",
      of: [{ type: "figure" }]
    }
  ]
};
