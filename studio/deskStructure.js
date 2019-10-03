import S from "@sanity/desk-tool/structure-builder";
import MdSettings from "react-icons/lib/md/settings";

const hiddenDocTypes = listItem => !["tag", "project", "siteSettings"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Projects")
        .schemaType("project")
        .child(S.documentTypeList("project").title("Projects")),
      S.listItem()
        .title("Tags")
        .schemaType("tag")
        .child(S.documentTypeList("tag").title("Tags")),
      S.listItem()
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(MdSettings),
      // S.listItem()
      //   .title("Tag Types")
      //   .schemaType("category")
      //   .child(S.documentTypeList("category").title("Tag Types")),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
